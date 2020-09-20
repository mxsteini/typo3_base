const MiniCssExtractPlugin = require('mini-css-extract-plugin')
require('babel-loader')
const config = require('./config')
// const workboxPlugin = require('workbox-webpack-plugin')
const merge = require('webpack-merge')
const CopyPlugin = require('copy-webpack-plugin')
require('@babel/core').transform('code', {
    plugins: ['@babel/plugin-proposal-class-properties']
})
require('@babel/preset-env')
require('@babel/polyfill')
require('core-js/stable')


// path.join(rootPath, 'resources/assets'),

// process.cwd(config.paths.root)
let webpackConfig = {
    context: config.paths.assets,
    mode: config.mode,
    entry: {
        aboveHome: './JavaScripts/Home/above.js',
        belowHome: './JavaScripts/Home/below.js',
        aboveContent: './JavaScripts/Content/above.js',
        belowContent: './JavaScripts/Content/below.js',
        intersectionObserver: './JavaScripts/Helper/intersectionObserver.js',
        ieFix: './JavaScripts/Helper/ieFix.js',
        picturePolyfill: './JavaScripts/Helper/picturePolyfill.js',
        polyfill: '@babel/polyfill',
        rte: './JavaScripts/rte.js',
        jquery: './JavaScripts/Helper/jqueryLoader.js',
        'Backend/Backend': './JavaScripts/backend.js',
    },
    devtool: config.enabled.sourceMaps ? 'source-map' : '',
    watchOptions: {
        ignored: ['node_modules', 'cache', '.cache-loader', 'Public/**/*', '*.json']
    },
    output: {
        filename: 'JavaScripts/[name].js',
        path: config.paths.dist
    },
    devServer: {
        index: '',
        host: config.devHost,
        contentBase: config.paths.watch,
        watchContentBase: true,
        liveReload: true,
        publicPath: config.devUrl + config.paths.publicPath,
        proxy: {
            '/': {
                context: () => true,
                target: config.devUrl,
                changeOrigin: true,
                secure: false
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(css)/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                include: [/Fonts/],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '../Fonts'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)?$/,
                include: [/Assets/],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '../Images'
                        }
                    }
                ]
            },
            {
                test: /bootstrap\.native/,
                use: {
                    loader: 'bootstrap.native-loader',
                    options: {
                        only: ['dropdown']
                    }
                }
            },
            {
                test: /\.(scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader', options: {
                            sourceMap: config.enabled.sourceMaps
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                                require('autoprefixer')({}),
                                require('css-mqpacker')({}),
                                require('lost')({}),
                                require('cssnano')({})
                            ],
                            sourceMap: config.enabled.sourceMaps
                        }
                    },
                    {
                        loader: 'sass-loader', options: {
                            sourceMap: config.enabled.sourceMaps
                        }
                    }
                ]
            }
        ],

    },
    plugins: [
        // new webpack.ProvidePlugin({
        //   $: 'jquery',
        //   jQuery: 'jquery',
        //   'window.jQuery': 'jquery'
        // }),
        new CopyPlugin([
            { from: '../Private/Assets/Images', to: 'Images' },
            { from: '../Private/Assets/JavaScripts', to: 'JavaScripts' },
            { from: '../Private/Fonts/', to: 'Fonts' }
        ]),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'StyleSheets/[name].css',
            publicPath: config.paths.dist,
            chunkFilename: '[id].css'
        }),
        // new workboxPlugin.GenerateSW({
        //   swDest: '../../../../web/sw.js',
        //   precacheManifestFilename: 'JavaScripts/precache-manifest.[manifestHash].js',
        //   clientsClaim: true,
        //   skipWaiting: true,
        //   exclude: [/\.map$/, /.*manifest.*\.js$/],
        //   runtimeCaching: [{
        //     // Match any same-origin request that contains 'api'.
        //     urlPattern: /.*/,
        //     // Apply a network-first strategy.
        //     handler: 'NetworkFirst'
        //   }]
        // })
    ]
}

if (config.enabled.useBabel || config.enabled.isProduction) {
    webpackConfig = merge(webpackConfig, require('./webpack.config.babelIE.js'))
}

module.exports = webpackConfig