import {registerJavaScriptFile, registerCssFile} from "../http/createIndexHtml";
import {registerService} from "../services/registerService";
import {LoginRequest_Id} from "buhta-core-api/services/LoginRequest";
import {login} from "../services/login";
import {ping} from "../services/ping";
import {PingRequest_Id} from "buhta-core-api/services/PingRequest";
import {MongoFindRequest_Id} from "buhta-core-api/services/MongoFindRequest";
import {mongoFind} from "../services/mongoFind";

export async function initModule(): Promise<void> {
    //await registerSchemaDataTypes();
    //console.log("registerSchemaDataTypes Ok");

    //await registerPingRequest();
    //await registerLoginRequest();
    //await registerMongoFindRequest();

    return new Promise<void>(
        (resolve: () => void, reject: (error: string) => void) => {
            registerService(LoginRequest_Id, login);
            registerService(PingRequest_Id, ping);
            registerService(MongoFindRequest_Id, mongoFind);

            registerCssFile("node_modules/bootstrap/dist/css/bootstrap.css");
            registerCssFile("node_modules/font-awesome/css/font-awesome.min.css");

            registerJavaScriptFile("node_modules/jquery/dist/jquery.min.js");
            registerJavaScriptFile("node_modules/bootstrap/dist/js/bootstrap.min.js");
            registerJavaScriptFile("node_modules/react/dist/react.js");
            registerJavaScriptFile("node_modules/react-dom/dist/react-dom.js");
            registerJavaScriptFile("node_modules/socket.io-client/dist/socket.io.js");
            registerJavaScriptFile("node_modules/bluebird/js/browser/bluebird.min.js");

            console.log("buhta-core-server: initModules Ok");
            resolve();
        });


}
