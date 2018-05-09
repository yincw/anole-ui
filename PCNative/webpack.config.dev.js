import { join, resolve } from 'path';
import { spawn } from 'child_process';
import webpack from 'webpack';
import merge from 'webpack-merge';
import CleanPlugin from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import commonConfig from './webpack.config.common';
import { directory, general, debug } from './.vd/project.json';


// 动态获取本机 IP 地址
function getIpAddress() {
  if (process.env.PC_CLIENT) {
    return 'localhost';
  } else {
    const interfaces = require('os').networkInterfaces(); // eslint-disable-line global-require
    for (const devName in interfaces) { // eslint-disable-line guard-for-in, no-restricted-syntax
        const iface = interfaces[devName];
        for (let i = 0; i < iface.length; i += 1) {
            const alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
  }
}
const $host = getIpAddress();


export default merge.smart(commonConfig, {
  devServer: {
    host: $host,
    port: debug.port,
    hot: true,
    inline: true,
    compress: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    publicPath: resolve(general.publicPath, '/'),
    contentBase: join(__dirname, directory.production.envName),
    before() {
      if (process.env.PC_CLIENT) {
        console.log('Starting Main Process...');
        spawn(
          'npm',
          [
            'run',
            'start-main-dev'
          ],
          {
            shell: true,
            env: process.env,
            stdio: 'inherit'
          }
        )
        .on('close', code => process.exit(code))
        .on('error', spawnError => console.error(spawnError));
      }
    }
  },
  entry: [
    'babel-polyfill',
    join(__dirname, 'src', 'index.js'),
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      '__DEV__': true
    }),
    new CleanPlugin([
      join(__dirname, directory.production.envName, '*.html'),
    ]),
    new CopyPlugin([
      {
        from: 'upgrade/**/*',
        to: join(__dirname, directory.production.envName),
      }
    ]),
    new webpack.ProvidePlugin({
      'Mock': 'mockjs',
      'MockAdapter': 'axios-mock-adapter',
    }),
    ...debug.sync === false ? []: [
      new BrowserSyncPlugin({
        host: $host,
        port: debug.browsersync.port,
        proxy: 'http://' + $host + ':' + debug.port,
        open: debug.browsersync.open,
      })
    ],
  ],
  target: general.target,
  // devtool: "source-map",
});
