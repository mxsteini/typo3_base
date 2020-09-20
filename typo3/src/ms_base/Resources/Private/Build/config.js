const path = require('path')
const fs = require('fs')
const { argv } = require('yargs')
const merge = require('webpack-merge')

const desire = require('./util/desire');

const userConfig = merge(desire(`${__dirname}/../config`), desire(`${__dirname}/../config-local`));
// const userConfig = {}
// console.log('config: 8', userConfig)
const rootPath = path.join(__dirname, '../../..')
const  extensionName = path.basename(path.join(__dirname, '../../..'))

const isProduction = !!((argv.env && argv.env.production) || argv.p)
const useBabel = !!(argv.env && argv.env.useBabel);
// const rootPath = (userConfig.paths && userConfig.paths.root)
//   ? userConfig.paths.root
//   : process.cwd();

const config = merge({
    extensionName: extensionName,
    open: true,
    devHost: 'localhost',
    copy: '+(Images|Fonts|fonts)/**/*',
    cacheBusting: '[name]_[hash]',
    mode: isProduction ? 'production' : 'development',
    paths: {
        root: rootPath,
        assets: path.join(rootPath, 'Resources/Private/'),
        dist: path.join(rootPath, 'Resources/Public/'),
        publicPath: '/typo3conf/ext/' + extensionName + '/Resources/Public/',
        watch: [
            rootPath
        ]
    },
    enabled: {
        useBabel: useBabel,
        isProduction: isProduction,
        sourceMaps: !isProduction,
        optimize: isProduction,
        cacheBusting: isProduction,
        watcher: !!argv.watch,
    },
    watch: [],
}, userConfig)

module.exports = merge(config, {
    env: Object.assign({ production: isProduction, development: !isProduction }, argv.env),
    manifest: {},
})

if (process.env.NODE_ENV === undefined) {
    process.env.NODE_ENV = isProduction ? 'production' : 'development'
}

/**
 * If your publicPath differs between environments, but you know it at compile time,
 * then set SAGE_DIST_PATH as an environment variable before compiling.
 * Example:
 *   SAGE_DIST_PATH=/wp-content/themes/sage/dist/ yarn build:production
 */
// if (process.env.PUBLIC_PATH) {
//   module.exports.publicPath = process.env.PUBLIC_PATH;
// }

/**
 * If you don't know your publicPath at compile time, then uncomment the lines
 * below and use WordPress's wp_localize_script() to set SAGE_DIST_PATH global.
 * Example:
 *   wp_localize_script('sage/main.js', 'SAGE_DIST_PATH', get_theme_file_uri('dist/'))
 */
// Object.keys(module.exports.entry).forEach(id =>
//   module.exports.entry[id].unshift(path.join(__dirname, 'helpers/public-path.js')));
