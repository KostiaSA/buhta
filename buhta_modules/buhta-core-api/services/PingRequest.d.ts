import { IBaseRequest, IBaseRequestAnswer } from "./BaseRequest";
export declare const PingRequest_Id: string;
export interface IPingRequest extends IBaseRequest {
}
export interface IPingRequestAnswer extends IBaseRequestAnswer {
    serverTime: Date;
}
