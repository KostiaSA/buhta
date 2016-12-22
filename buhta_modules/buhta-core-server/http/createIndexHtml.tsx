import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactDOMServer from "react-dom/server"


let registeredJavaScriptFiles: string[] = [];
let registeredCssFiles: string[] = [];

export function registerJavaScriptFile(filePathName: string) {
    registeredJavaScriptFiles.push(filePathName);
}

export function registerCssFile(filePathName: string) {
    registeredCssFiles.push(filePathName);
}

export function createIndexHtml(): string {
    let cssTags = registeredCssFiles.map((fileName: string, index:number) => {
        return <link key={index} href={fileName} rel="stylesheet"/>
    });

    let jsTags = registeredJavaScriptFiles.map((fileName: string, index:number) => {
        return <script key={index} src={fileName}></script>
    });

    let page = (
        <html>
        <head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="Content-Security-Policy" content="default-src * data: gap: *; style-src *; media-src *"/>
            <meta name="format-detection" content="telephone=no"/>
            <meta name="msapplication-tap-highlight" content="no"/>
            <meta name="viewport"
                  content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width"/>
            {cssTags}
            <title>Hello Buhta!!</title>
        </head>
        <body>
        <div id="content"></div>
        {jsTags}
        <script src="client_bundle.js"></script>
        </body>
        </html>
    )

    let pageHtml = ReactDOMServer.renderToStaticMarkup(page);

    return `<!DOCTYPE html>` + pageHtml;
}
