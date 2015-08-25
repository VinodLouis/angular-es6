'use strict';
var path                 = require('path')
    , webpack            = require('webpack')
    , _                  = require('lodash');

module.exports = {
    module   : {
        loaders: [
            {test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader?optional=runtime'}
            , {test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery'}
            , {test: /\.scss$/, loader: 'style!css!sass'}
            , {test: /\.less$/, loader: 'style!css!less'}
            , {test: /\.css$/, loader: 'style!css'}
            //, {test: /\.(png|jpg)$/, loader: 'url?limit=100'}
            //, {test: /\.(woff|woff2)$/, loader: 'url?limit=10000'}
            //, {test: /\.(ttf|eot|svg)$/, loader: 'file'}
            , {test: /\.html$/, loader: 'raw'}
            , {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff"}
            , {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff"}
            //, {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/octet-stream"}
            , {test: /.ttf([\?]?.*)$/, loader: "url?limit=10000&minetype=application/octet-stream"}
            , {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"}
            , {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=image/svg+xml"}
            , { test: /is_js/, loader: "imports?define=>undefined" }
        ]
    }
    , devtool: '#source-map'
    , plugins: [
        new webpack.optimize.DedupePlugin()
        , new webpack.dependencies.LabeledModulesPlugin()
        , new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery'})
        , new webpack.ProvidePlugin({is: 'is_js', 'window.is': 'is_js'})
    ]
};

