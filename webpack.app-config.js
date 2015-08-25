'use strict';
var path           = require('path')
    , webpack      = require('webpack')
    , _            = require('lodash')
    , exportable   = {}
    , commonConfig = require('./webpack/webpack.common.config');

exportable = _.extend({}
    , {context: path.join(__dirname, 'app/src')}
    , {
        entry: {
            main: './js/main.js'
        }
    }
    , {
        output: {
            filename           : 'app/dist/js/build-js.js'
            , sourceMapFilename: '[file].map'
        }
    }
    , commonConfig);

module.exports = exportable;

