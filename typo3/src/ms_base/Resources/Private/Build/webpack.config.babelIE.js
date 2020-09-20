require('babel-loader')
const config = require('./config')
const CopyPlugin = require('copy-webpack-plugin')
require('@babel/core').transform('code', {
    plugins: ['@babel/plugin-proposal-class-properties']
})
require('@babel/preset-env')
require('@babel/polyfill')
require('core-js/stable')


// path.join(rootPath, 'resources/assets'),

// process.cwd(config.paths.root)

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        'presets': [
                            [
                                '@babel/preset-env',
                                {
                                    'targets': {
                                        'chrome': '58',
                                        'ie': '11'
                                    },
                                    useBuiltIns: 'entry',
                                    corejs: 'core-js@3'
                                }
                            ]
                        ]
                    }
                }
            },
        ],
    }
}
