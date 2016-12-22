import {httpServer} from "../http/http-server";
//import {IBaseRequest, IBaseRequestAnswer} from "../../api/BaseRequest";
import * as EJSON from "ejson";
import {IBaseRequest} from "buhta-core-api/services/BaseRequest";
import {IBaseRequestAnswer} from "buhta-core-api/services/BaseRequest";
import {registerService, registeredServices} from "../services/registerService";



export function startWebsocketServer() {
    let socketServer = require("socket.io")(httpServer);

    socketServer.on("connection", function (clientSocket: SocketIO.Socket) {
        console.log("socket-on-connection", clientSocket.id);

        clientSocket.on("event", function (requestStr: string) {
            //console.log("event", requestStr);
            let request = EJSON.parse(requestStr) as IBaseRequest;
            //let module = require("buhta-runtime/" + request.requestId);

            let service_handler=registeredServices[request.requestId];

            if (!service_handler){
                let ans: IBaseRequestAnswer = {
                    error: `неверное id запроса к серверу "${request.requestId}"`,
                    random: request.random
                };
                clientSocket.emit(request.requestId + request.random, EJSON.stringify(ans));
                console.log("ans error: " + request.requestId, ans);
            }
            else {
                service_handler(request)
                    .then((ans: IBaseRequestAnswer) => {
                        ans.random = request.random;
                        clientSocket.emit(request.requestId + request.random, EJSON.stringify(ans));
                        console.log("ans: " + request.requestId, ans);

                    })
                    .catch((err: any) => {
                        let ans: IBaseRequestAnswer = {
                            error: err.toString(),
                            random: request.random
                        };
                        clientSocket.emit(request.requestId + request.random, EJSON.stringify(ans));
                        console.log("ans error: " + request.requestId, ans);
                    });
            }
        });
    });


    //io.listen(4001);
    //console.log("socketio listen 4001");
}