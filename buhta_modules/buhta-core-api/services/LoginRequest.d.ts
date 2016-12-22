import { IBaseRequest, IBaseRequestAnswer } from "./BaseRequest";
export declare const LoginRequest_Id = "szre1489iom0n9gq8upx";
export interface ILoginRequest extends IBaseRequest {
    login: string;
    password: string;
}
export interface ILoginRequestAnswer extends IBaseRequestAnswer {
}
