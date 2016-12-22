import {ILoginRequest, ILoginRequestAnswer, LoginRequest_Id} from "buhta-core-api/services/LoginRequest";
import {getInstantPromise} from "../utils/getInstantPromise";
import {getInstantPromiseError} from "../utils/getInstantPromiseError";

export function login(req: ILoginRequest): Promise<ILoginRequestAnswer> {
    if (req.login === "admin")
        return getInstantPromise({});
    else
        return getInstantPromiseError("invalid login or password");
}

// export async function registerLoginRequest(): Promise<void> {
//
//     let fileName = "login";
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
//         _id: LoginRequest_Id,
//         _class: "SchemaRequest",
//         name: "LoginRequest",
//         description: "Login, авторизация",
//         createDate: new Date(),
//         createUserId: "buhta",
//         requestBodyTypeId: ILoginRequest_Interface_Id,
//         answerBodyTypeId: ILoginRequestAnswer_Interface_Id,
//         serverModule: handler
//     };
//     await saveSchemaObject(request);
//
//     let dataType: ISchemaDataType;
//
//     // ILoginRequest
//     dataType = {
//         _id: ILoginRequest_Interface_Id,
//         _class: "interface",
//         inheritFromId: IBaseRequest_Interface_Id,
//         name: "ILoginRequest",
//         description: "Login к серверу",
//         props: [
//             {
//                 bindProp: "login",
//                 propTypes: [String_Type_Id],
//                 description: "логин"
//             },
//             {
//                 bindProp: "пароль",
//                 propTypes: [String_Type_Id],
//                 description: "пароль"
//             }
//
//         ],
//         createDate: new Date(),
//         createUserId: "buhta",
//
//     };
//     await saveSchemaObject(dataType);
//
//     // ILoginRequestAnswer
//     dataType = {
//         _id: ILoginRequestAnswer_Interface_Id,
//         _class: "interface",
//         inheritFromId: IBaseRequestAnswer_Interface_Id,
//         name: "ILoginRequestAnswer",
//         description: "ответ Login от сервера",
//         props: [],
//         createDate: new Date(),
//         createUserId: "buhta",
//
//     };
//     await saveSchemaObject(dataType);
//
// }