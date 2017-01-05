import {msSqlDataTypes} from "./mssql/msSqlDataTypes";
import {getInstantPromiseError} from "../buhta-core-client/utils/getInstantPromiseError";
import {getInstantPromise} from "../buhta-core-client/utils/getInstantPromise";
console.log("begin tests");


console.time("test");

let tests = [
    msSqlDataTypes(),

]

for (let i=0; i<0; i++)
    tests.push(msSqlDataTypes());

Promise.all(tests).then(() => {
    console.log("tests Ok");
    console.timeEnd("test");

}).catch((e: any) => {
    //console.error("tests error:", e);
});