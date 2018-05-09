import { join } from 'path';
import webpack from 'webpack';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import { directory, general } from './.vd/project.json';


export default {
  entry: [
    'babel-polyfill',
    join(__dirname, directory.development.envName, 'main.js'),
  ],
  output: {
    path: join(__dirname, directory.production.envName),
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            extends: join(__dirname, '.babelrc'),
            cacheDirectory: true,
          },
        },
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      // 允许在编译时配置全局常量，使用：if (__DEV__) {}
      // 'process.env.electronMode': JSON.stringify(process.env.electronMode),
      '__DEV__': false
    }),
    new webpack.EnvironmentPlugin({
      // 快捷方式，使用 DefinePlugin 在 process.env 键，使用：process.env.electronMode
      'electronMode': JSON.stringify(process.env.electronMode),
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          ecma: 5,
          output: {
            beautify: false,
          },
          compress: {
            drop_console: true,
          }
        }
      }),
    ],
  },
  externals: general.externals,
  target: "electron-main",
  // devtool: "source-map",
};
