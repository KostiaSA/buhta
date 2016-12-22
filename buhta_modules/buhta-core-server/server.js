"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const websocket_server_1 = require("./websocket/websocket-server");
const http_server_1 = require("./http/http-server");
const initAllModules_1 = require("./startup/initAllModules");
function buhta_server_start() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield initAllModules_1.initAllModules();
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
            http_server_1.startHttpServer();
            websocket_server_1.startWebsocketServer();
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
exports.buhta_server_start = buhta_server_start;
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
//# sourceMappingURL=server.js.map