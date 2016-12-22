import {ServerResponse} from "http";
import {IncomingMessage} from "http";
import {createServer} from "http";
import {createIndexHtml} from "./createIndexHtml";
import {Server} from "http";
import * as url from "url";
import * as path from "path";
import * as fs from "fs";
import {config} from "../config/config";
let mime = require("mime-types");

function handleRequest(request: IncomingMessage, response: ServerResponse) {
    if (request.url) {
        try {
            if (request.url === "/")
                request.url = "/index.html";

            if (request.url === "/index.html") {
                response.setHeader("Content-Type", mime.lookup("index.html"));
                response.statusCode = 200;
                response.end(createIndexHtml());
            }

            let requestUrl = url.parse(request.url);

            // need to use path.normalize so people can't access directories underneath baseDirectory
            //let fsPath = config.wwwPath + "/" + path.normalize(requestUrl.pathname!);
            let fsPath = path.normalize(requestUrl.pathname!).substr(1);

            if (fsPath !== "client_bundle.js" && !fsPath.toLowerCase().startsWith("node_modules")) {
                throw "error";
            }

            response.setHeader("Content-Type", mime.lookup(requestUrl.pathname));
            response.statusCode = 200;
            //response.writeHead(200);

            let fileStream = fs.createReadStream(fsPath);
            fileStream.pipe(response);
            fileStream.on('error', function (e: any) {
                response.statusCode = 404;
                //response.writeHead(404);     // assume the file doesn't exist
                response.end();
            })

        } catch (e) {
            response.statusCode = 500;
            //response.writeHead(500);
            response.end();     // end the response so browsers don't hang
            console.log(e.stack)
        }
    }
    else {
        response.end(createIndexHtml());
    }
}

export let httpServer: Server;

export function startHttpServer() {
    httpServer = createServer(handleRequest);

    httpServer.listen(4000, function () {
        //Callback triggered when server is successfully listening. Hurray!
        console.log("Server listening on: http://localhost:%s", 4000);
    });
}