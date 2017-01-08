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
                port: 3000,
                path: "/",
                method: 'POST',
                // headers: {
                //     'Content-Type': 'application/x-www-form-urlencoded',
                //     'Content-Length': Buffer.byteLength(post_str)
                // }
            };

            let post_req = http.request(post_options, function (socket: http.IncomingMessage) {
                socket.setEncoding("utf8");

                let data: string[] = [];

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
                    //console.log('tot ResponseLen: ' + data.join("").length);
                    //console.timeEnd("time");

                    //console.time("parse");
                    let req = JSON.parse(data.join("")) as IProxyExecuteSqlAnswer;

                    //console.timeEnd("parse");
                    if (req.error)
                        reject(req.error);
                    else {
                        for (let rowsetIndex = 0; rowsetIndex < req.rowsets.length; rowsetIndex++) {
                            let rowset = req.rowsets[rowsetIndex];
                            for (let rowIndex = 0; rowIndex < rowset.rows.length; rowIndex++) {
                                for (let colIndex = 0; colIndex < rowset.rows[rowIndex].length; colIndex++) {
                                    let value = rowset.rows[rowIndex][colIndex];
                                    if (typeof value === "object") {
                                        if (value.t === "N") // null
                                            rowset.rows[rowIndex][colIndex] = null;
                                        else if (value.t === "D")  // date
                                            rowset.rows[rowIndex][colIndex] = new Date(value.v);
                                        else if (value.t === "T") { //time
                                            rowset.rows[rowIndex][colIndex] = {
                                                h: value.h,
                                                m: value.m,
                                                s: value.s,
                                                ms: value.ms
                                            };
                                            console.log(rowset.rows[rowIndex][colIndex]);
                                        }
                                    }
                                }
                            }
                        }
                        resolve(req);
                    }
                });
            });

            // post the data
            console.time("time");
            post_req.write(post_str);
            post_req.end();

        });


}