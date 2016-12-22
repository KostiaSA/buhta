import {startWebsocketServer} from "./websocket/websocket-server";
import {startHttpServer} from "./http/http-server";
import {initAllModules} from "./startup/initAllModules";

export async function buhta_server_start() {

    try {

        await initAllModules();
        console.log("initAllModules: Ok");

        //
        // await createRunTimeModules()
        // console.log("createRunTimeModules: Ok");
        //
        // let compileResult = compileRunTimeModules();
        // if (compileResult.error) {
        //     throw compileResult.error;
        // }
        // else if (compileResult.status !== 0) {
        //     throw "compile error: " + compileResult.stdout.toString();
        // }
        // console.log("compileRunTimeModules: Ok");


        startHttpServer();
        startWebsocketServer();

    }
    catch (e) {
        console.error(e);
        process.exit(1);
    }
}

// console.log("ping---1-->:", ping(1));
//
// console.time('someFunction');
// console.timeEnd('someFunction');
// let x: any = {};
// let y: any;
// for (let i = 0; i < 100000; i++) {
//     x[i.toString()] = i;
//     //let websocket_server_1 = require("./websocket/websocket-server");
//     //let websocket_server_2 = require("./schema/registerSchemaDataTypes");
// }
// console.timeEnd('someFunction');
// console.log(x.length);
// console.time('someFunction2');
// for (let i = 0; i < 100000; i++) {
//     y=x[i.toString()];
//     //let websocket_server_1 = require("./websocket/websocket-server");
//     //let websocket_server_2 = require("./schema/registerSchemaDataTypes");
// }
// console.timeEnd('someFunction2');
// console.log(y);
//
// console.log(require.cache);