import { IBaseRequest, IBaseRequestAnswer } from "./BaseRequest";
export declare const LoginRequest_Id: string;
export interface ILoginRequest extends IBaseRequest {
    login: string;
    password: string;
}
export interface ILoginRequestAnswer extends IBaseRequestAnswer {
}
