import {config} from "../config/config";

export async function initAllModules():Promise<void>{
    for (let moduleName of config.modules) {
        const module = require(moduleName+"/startup/initModule");
        await module.initModule();
        console.log("initModule "+ moduleName+"/startup/initModule Ok");
    }
}
