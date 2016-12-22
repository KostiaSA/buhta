import {getSchemaMongoDb} from "../schema/getSchemaMongoDb";
import {IMongoFindRequestAnswer} from "buhta-core-api/services/MongoFindRequest";
import {IMongoFindRequest} from "buhta-core-api/services/MongoFindRequest";

export async function mongoFind(req: IMongoFindRequest): Promise<IMongoFindRequestAnswer> {
    try {
        let db = await getSchemaMongoDb();
        let objects = await db.collection(req.collection).find(req.query, req.fields, req.skip, req.limit, req.timeout).toArray();
        return {objects: objects};
    }
    catch (e) {
        return {error: e.toString()};
    }

}

// export async function registerMongoFindRequest(): Promise<void> {
//
//     let fileName = "mongoFind";
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
//         _id: MongoFindRequest_Id,
//         _class: "SchemaRequest",
//         name: "MongoFindRequest",
//         description: "MongoFind",
//         createDate: new Date(),
//         createUserId: "buhta",
//         requestBodyTypeId: IMongoFindRequest_Interface_Id,
//         answerBodyTypeId: IMongoFindRequestAnswer_Interface_Id,
//         serverModule: handler
//     };
//     await saveSchemaObject(request);
//
//     let dataType: ISchemaDataType;
//
//     // IMongoFindRequest
//     dataType = {
//         _id: IMongoFindRequest_Interface_Id,
//         _class: "interface",
//         inheritFromId: IBaseRequest_Interface_Id,
//         name: "IMongoFindRequest",
//         description: "MongoFind",
//         props: [
//             {
//                 propName: "collection",
//                 propTypes: [String_Type_Id],
//                 description: "collection"
//             },
//             {
//                 propName: "query",
//                 propTypes: [Object_Type_Id],
//                 description: "запрос/фильтр"
//             },
//             {
//                 propName: "fields",
//                 propTypes: [Object_Type_Id],
//                 isOptional: true,
//                 description: "состав возвращаемых полей"
//             },
//             {
//                 propName: "skip",
//                 propTypes: [Number_Type_Id],
//                 isOptional: true,
//                 description: "skip"
//             },
//             {
//                 propName: "limit",
//                 propTypes: [Number_Type_Id],
//                 isOptional: true,
//                 description: "limit"
//             },
//             {
//                 propName: "timeout",
//                 propTypes: [Number_Type_Id],
//                 isOptional: true,
//                 description: "timeout"
//             }
//
//         ],
//         createDate: new Date(),
//         createUserId: "buhta",
//
//     };
//     await saveSchemaObject(dataType);
//
//     // IMongoFindRequestAnswer
//     dataType = {
//         _id: IMongoFindRequestAnswer_Interface_Id,
//         _class: "interface",
//         inheritFromId: IBaseRequestAnswer_Interface_Id,
//         name: "IMongoFindRequestAnswer",
//         description: "ответ MongoFind от сервера: массив объектов",
//         props: [
//             {
//                 propName: "objects",
//                 propTypes: [Array_Type_Id],
//                 description: "результат запроса: массив объектов"
//             }
//         ],
//         createDate: new Date(),
//         createUserId: "buhta",
//
//     };
//     await saveSchemaObject(dataType);
//
// }