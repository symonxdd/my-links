'use strict';

const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');
const PATHS = require('./paths');

// Merge webpack configuration files
const config = (env, argv) => merge(common, {
    entry: {
        popup: PATHS.src + '/js/popup.js',
        service_worker: PATHS.src + '/js/service_worker.js'
    },
    devtool: argv.mode === 'production' ? false : 'source-map'
});

module.exports = config;