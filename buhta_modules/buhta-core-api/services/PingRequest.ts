
import {IBaseRequest, IBaseRequestAnswer} from "./BaseRequest";

export const PingRequest_Id = "a721nw5mqjemr9oxtwl1";

export interface IPingRequest extends IBaseRequest {

}

export interface IPingRequestAnswer extends IBaseRequestAnswer {
    serverTime: Date;
}
