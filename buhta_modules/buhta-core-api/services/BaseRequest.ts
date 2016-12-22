

export interface IBaseRequest{
    requestId:string;
    sessionId?:string;
    random?:string;
}

export interface IBaseRequestAnswer{
    error?:string;
    random?:string;
}
