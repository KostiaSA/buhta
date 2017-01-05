import {getInstantPromise} from "../utils/getInstantPromise";
import {IPingRequest} from "buhta-core-api/services/PingRequest";
import {IPingRequestAnswer} from "buhta-core-api/services/PingRequest";
import * as http from "http";
import {executeSql, IProxyExecuteSqlRequest, IProxyExecuteSqlAnswer} from "../sql/executeSql";

export function ping(req: IPingRequest): Promise<IPingRequestAnswer> {

    // let post_data={
    //     driverName:"mssql77"
    // }
    //
    // let post_str=JSON.stringify(post_data);
    //
    // let post_options:http.RequestOptions = {
    //     host: "localhost",
    //     port: 49674,
    //     path: "/",
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //         'Content-Length': Buffer.byteLength(post_str)
    //     }
    // };
    //
    // // Set up the request
    // for (let i=0; i<1000;i++) {
    //
    //     setTimeout(()=>{
    //         let post_req = http.request(post_options, function (res) {
    //             res.setEncoding('utf8');
    //             res.on('data', function (chunk) {
    //                 console.timeEnd("w:"+i);
    //                 console.log('Response: ' + chunk);
    //             });
    //         });
    //
    //         // post the data
    //         console.time("w:"+i);
    //         post_req.write(post_str);
    //         post_req.end();
    //
    //     },0);
    //
    // }

    let user="sa";
    if (new Date().getUTCMilliseconds()%2===0)
        user="sa1";

    let sqlReq: IProxyExecuteSqlRequest = {
        driverName: "mssql",
        user: user,
        password: "sonyk",
        server: "localhost",
        database: "MAG3305",
//        sql: [`select top 1 '123' Номер, 'ур"од\\ы' Название from ТМЦ`]
        sql: [`select top 1  Номер, Название from ТМЦ; waitfor delay '00:00:02'`]

    }

    executeSql(sqlReq).then((res: IProxyExecuteSqlAnswer) => {
        //console.log(sqlReq, res);
    });

    return getInstantPromise({serverTime: new Date()});
}

// export async function registerPingRequest(): Promise<void> {
//
//     let fileName = "ping";
//     let request: ISchemaRequest;
//
//     let handler = `
// import {${fileName}} from "buhta-core/server/responses/${fileName}";
//
// export function handler(req:any):Promise<any>{
//     return ${fileName}(req);
// }`;
//
//     request = {
//         _id: PingRequest_Id,
//         _class: "SchemaRequest",
//         name: "PingRequest",
//         description: "Ping к серверу",
//         createDate: new Date(),
//         createUserId: "buhta",
//         requestBodyTypeId: IPingRequest_Interface_Id,
//         answerBodyTypeId: IPingRequestAnswer_Interface_Id,
//         serverModule: handler
//     };
//     await saveSchemaObject(request);
//
//     let dataType: ISchemaDataType;
//
//     // IPingRequest
//     dataType = {
//         _id: IPingRequest_Interface_Id,
//         _class: "interface",
//         inheritFromId: IBaseRequest_Interface_Id,
//         name: "IPingRequest",
//         description: "ping к серверу",
//         props: [],
//         createDate: new Date(),
//         createUserId: "buhta",
//
//     };
//     await saveSchemaObject(dataType);
//
//     // IPingRequestAnswer
//     dataType = {
//         _id: IPingRequestAnswer_Interface_Id,
//         _class: "interface",
//         inheritFromId: IBaseRequestAnswer_Interface_Id,
//         name: "IPingRequestAnswer",
//         description: "ответ ping от сервера",
//         props: [
//             {
//                 bindProp: "serverTime",
//                 propTypes: [Date_Type_Id],
//                 description: "время серера"
//             }
//         ],
//         createDate: new Date(),
//         createUserId: "buhta",
//
//     };
//     await saveSchemaObject(dataType);
//
// }