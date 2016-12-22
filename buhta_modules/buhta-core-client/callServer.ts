
import Socket = SocketIOClient.Socket;
const socket = io.connect("", {transports: ['websocket']});
import * as EJSON from "ejson";
import {ILoginRequest} from "buhta-core-api/services/LoginRequest";
import {LoginRequest_Id} from "buhta-core-api/services/LoginRequest";
import {ILoginRequestAnswer} from "buhta-core-api/services/LoginRequest";
import {IBaseRequest} from "buhta-core-api/services/BaseRequest";
import {IBaseRequestAnswer} from "buhta-core-api/services/BaseRequest";
import {getRandomString} from "./utils/getRandomString";


let isAutorized = false;


socket.on("connect", () => {
    console.log("a user connected");

    let loginReq: ILoginRequest = {
        requestId: LoginRequest_Id,
        login: "admin",
        password: "*"
    }

    callServer<ILoginRequest,ILoginRequestAnswer>(loginReq)
        .then((ans: ILoginRequestAnswer) => {
            isAutorized = true;
            console.log("login Ok");
        })
        .catch((err: string) => {
            isAutorized = false;
            console.log("login failed: ", err);
        });

    socket.on("disconnect", function () {
        isAutorized = false;
        console.log("user disconnected");
    });


});


export async function callServer<Req extends IBaseRequest,Ans extends IBaseRequestAnswer>(request: Req): Promise<Ans> {
    return new Promise<Ans>(
        (resolve: (obj: Ans) => void, reject: (error: string) => void) => {

            request.sessionId = "sessionId-QQQ"; // todo request.sessionId = "sessionId-QQQ";
            request.random = getRandomString(10);

            console.time("callServer " + request.random);
            socket.emit("event", EJSON.stringify(request));

            socket.once(request.requestId + request.random, (dataStr: any) => {
                let data = EJSON.parse(dataStr) as Ans;
                console.timeEnd("callServer " + data.random);
                if (data.error)
                    reject(data.error);
                else
                    resolve(data);
            })

        });

}
