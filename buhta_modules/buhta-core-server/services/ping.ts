
import {getInstantPromise} from "../utils/getInstantPromise";
import {IPingRequest} from "buhta-core-api/services/PingRequest";
import {IPingRequestAnswer} from "buhta-core-api/services/PingRequest";

export function ping(req: IPingRequest): Promise<IPingRequestAnswer> {
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
//                 propName: "serverTime",
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