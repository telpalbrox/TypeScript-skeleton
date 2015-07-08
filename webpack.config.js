var webpack = require('webpack');
module.exports = {
    context: __dirname + '/app',
    entry: {
        app: ['./index.ts']
    },
    output: {
        path: __dirname + '/app',
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            // required to write "require('./style.css')"
            { test: /\.css$/,    loader: "style-loader!css-loader" },

            // required for bootstrap icons
            { test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff" },
            { test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
            { test: /\.eot$/,    loader: "file-loader?prefix=font/" },
            { test: /\.svg$/,    loader: "file-loader?prefix=font/" },

            // required for react es2015
            { test: /\.js$/, loader: "babel", exclude: /node_modules/ },
            { test: /\.less$/, loader: "style!css!less" },

            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            // Automtically detect jQuery and $ as free var in modules
            // and inject the jquery library
            // This is required by many jquery plugins
            jQuery: "jquery",
            $: "jquery"
        })
    ]
};