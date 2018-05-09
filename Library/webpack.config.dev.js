import { join, resolve } from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import CleanPlugin from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import ip from 'ip';
import commonConfig from './webpack.config.common';
import { directory, general, debug } from './.vd/project.json';


export default merge.smart(commonConfig, {
  devServer: {
    host: ip.address(),
    port: debug.port,
    hot: true,
    inline: true,
    compress: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    open: debug.browsersync.open,
    publicPath: resolve(general.publicPath, '/'),
    contentBase: join(__dirname, directory.production.envName),
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
