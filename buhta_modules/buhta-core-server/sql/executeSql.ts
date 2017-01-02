import * as http from "http";

export interface IProxyExecuteSqlRequest {
    driverName: string;
    user: string;
    password: string;
    server: string;
    database: string;
    sql: string[];
}

export interface IProxyExecuteSqlAnswer {
    error: string;
    rowsets: ISqlRowset[];
}

export interface ISqlRowset {
    columns: ISqlColumn[];
    rows: any[][];
}

export class ISqlColumn {
    name: string;
    type: string;
}

// export class ISqlRow {
//     value: any;
// }

export function executeSql(req: IProxyExecuteSqlRequest): Promise<IProxyExecuteSqlAnswer> {

    return new Promise<IProxyExecuteSqlAnswer>(
        (resolve: (obj: IProxyExecuteSqlAnswer) => void, reject: (error: string) => void) => {

            let post_str = JSON.stringify(req);

            let post_options: http.RequestOptions = {
                host: "localhost",
                port: 49674,
                path: "/",
                method: 'POST',
                // headers: {
                //     'Content-Type': 'application/x-www-form-urlencoded',
                //     'Content-Length': Buffer.byteLength(post_str)
                // }
            };

            let post_req = http.request(post_options, function (socket: http.IncomingMessage) {
                socket.setEncoding("utf8");

                let data:string[]=[];

                socket.on("data", function (response: string) {
                    data.push(response);
                    //console.log('ResponseLen: ' + response.length);
                    //console.log('Response: ' + response);

                    // let req = JSON.parse(response) as IProxyExecuteSqlAnswer;
                    // if (req.error)
                    //     reject(req.error);
                    // else
                    //     resolve(req);
                });

                socket.on("end", () => {
                     console.log('tot ResponseLen: ' + data.join("").length);
                    console.timeEnd("time");

                    console.time("parse");
                     let req = JSON.parse(data.join("")) as IProxyExecuteSqlAnswer;
                     console.timeEnd("parse");
                     if (req.error)
                         reject(req.error);
                     else
                         resolve(req);
                });
            });

            // post the data
            console.time("time");
            post_req.write(post_str);
            post_req.end();

        });


}