"use strict";
var React = require("react");
var ReactDOMServer = require("react-dom/server");
var registeredJavaScriptFiles = [];
var registeredCssFiles = [];
function registerJavaScriptFile(filePathName) {
    registeredJavaScriptFiles.push(filePathName);
}
exports.registerJavaScriptFile = registerJavaScriptFile;
function registerCssFile(filePathName) {
    registeredCssFiles.push(filePathName);
}
exports.registerCssFile = registerCssFile;
function createIndexHtml() {
    var cssTags = registeredCssFiles.map(function (fileName, index) {
        return <link key={index} href={fileName} rel="stylesheet"/>;
    });
    var jsTags = registeredJavaScriptFiles.map(function (fileName, index) {
        return <script key={index} src={fileName}></script>;
    });
    var page = (<html>
        <head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="Content-Security-Policy" content="default-src * data: gap: *; style-src *; media-src *"/>
            <meta name="format-detection" content="telephone=no"/>
            <meta name="msapplication-tap-highlight" content="no"/>
            <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width"/>
            {cssTags}
            <title>Hello Buhta!</title>
        </head>
        <body>
        <div id="content"></div>
        {jsTags}
        <script src="client_bundle.js"></script>
        </body>
        </html>);
    var pageHtml = ReactDOMServer.renderToStaticMarkup(page);
    return "<!DOCTYPE html>" + pageHtml;
}
exports.createIndexHtml = createIndexHtml;
