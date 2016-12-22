import {IBaseRequest, IBaseRequestAnswer} from "./BaseRequest";

export const MongoFindRequest_Id = "ed4joy1td8i2h67rzlo1";

export interface IMongoFindRequest extends IBaseRequest {
    collection:string;
    query: Object;
    fields?: Object;
    skip?: number;
    limit?: number;
    timeout?: number;
}

export interface IMongoFindRequestAnswer extends IBaseRequestAnswer {
    objects?: Object[];
}
