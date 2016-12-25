import { IBaseRequest, IBaseRequestAnswer } from "./BaseRequest";
export declare const MongoFindRequest_Id: string;
export interface IMongoFindRequest extends IBaseRequest {
    collection: string;
    query: Object;
    fields?: Object;
    skip?: number;
    limit?: number;
    timeout?: number;
}
export interface IMongoFindRequestAnswer extends IBaseRequestAnswer {
    objects?: Object[];
}
