const webpack = require('webpack');
//const path = require('path');
//const copyWebpackPlugin = require('copy-webpack-plugin');
//const buildPath = path.resolve(__dirname, 'build');
//const nodeModulesPath = path.resolve(__dirname, 'node_modules');
//const TransferWebpackPlugin = require('transfer-webpack-plugin');

const webpackPreBuildPlugin = require("pre-build-webpack");
const copydir = require("copy-dir");

const buhtaModules=["buhta-core-api","buhta-core-client","buhta-core-server"];

module.exports = {
//    entry: "./buhta_modules/components/index.js",
    entry: "./buhta_modules/buhta-core-client/clientEntryPoint.js",
    output: {
        filename: "./client_bundle.js"
    },

    // Enable sourcemaps for debugging webpack's output.
    //devtool: "inline-source-map",

    // resolve: {
    //     // Add '.ts' and '.tsx' as resolvable extensions.
    //     extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    // },
    //
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js"]
    },
    plugins: [
        new webpackPreBuildPlugin(function (stats) {

            for (buhtaModule of buhtaModules) {
                console.log(buhtaModule);
                copydir.sync("buhta_modules/"+buhtaModule, "node_modules/"+buhtaModule, function (stat, filepath, filename) {
                    if (stat === "file") {
                        if (filepath.endsWith(".js")) return true;
                        if (filepath.endsWith(".css")) return true;
                        if (filepath.endsWith(".jpg")) return true;
                        if (filepath.endsWith(".jpeg")) return true;
                        if (filepath.endsWith(".png")) return true;
                        //if (filepath.endsWith(".d.ts")) return true;
                        return false;
                    }
                    else
                        return true;
                });

                //copydir.sync("buhta_modules/"+buhtaModule+"/www", "node_modules/"+buhtaModule+"/www");
            }

        })
// new copyWebpackPlugin([
//     {from: '../buhta-core/.dist', to: 'node_modules/buhta-core'}
// ], {
//     ignore: ['*.ts', '*.tsx', '*.map','package.json']
// })
// Define production build to allow React to strip out unnecessary checks
// new webpack.DefinePlugin({
//     'process.env':{
//         'NODE_ENV': JSON.stringify('production')
//     }
// }),
// Minify the bundle
// new webpack.optimize.UglifyJsPlugin({
//     compress: {
//         // suppresses warnings, usually from module minification
//         warnings: false,
//     },
// }),
// Allows error warnings but does not stop compiling.
//new webpack.NoErrorsPlugin(),
// Transfer Files
// new TransferWebpackPlugin([
//     {from: 'www'},
// ], path.resolve(__dirname, 'src')),
    ],
    // loaders: [
    //     {
    //         test: /\.js$/, // All .js files
    //         loaders: ['babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
    //         exclude: [nodeModulesPath],
    //     },
    // ],
    // When importing a module whose path matches one of the following,  just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        // "onsenui": "ons",
        // "react-onsenui": "Ons",
        //"lodash": "_",
        "jquery": "$",
        "socket.io-client": "io",
        //"moment": "moment",
    }
    ,
}
;