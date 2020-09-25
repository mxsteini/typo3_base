const path = require('path')
const fs = require('fs')
const { argv } = require('yargs')
const merge = require('webpack-merge')

const desire = require('./util/desire');

const userConfig = merge(desire(`${__dirname}/../config`), desire(`${__dirname}/../config-local`));
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
