import { join } from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import CleanPlugin from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import AssetsPlugin from 'assets-webpack-plugin';
import BundleAnalyzer from 'webpack-bundle-analyzer';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import commonConfig from './webpack.config.common';
import { directory, general } from './.vd/project.json';


// const BundleAnalyzerPlugin = BundleAnalyzer.BundleAnalyzerPlugin;


export default merge.smart(commonConfig, {
  entry: [
    'babel-polyfill',
    join(__dirname, directory.development.envName, 'index.js'),
  ],
  plugins: [
    new webpack.DefinePlugin({
      '__DEV__': false
    }),
    new webpack.EnvironmentPlugin({
      // 快捷方式，使用 DefinePlugin 在 process.env 键，使用：process.env.electronMode
      'electronMode': JSON.stringify(process.env.electronMode),
    }),
    new CleanPlugin([
      join(__dirname, directory.production.envName, directory.production.resource, directory.production.javascript, '*.*'),
      join(__dirname, directory.production.envName, directory.production.resource, directory.production.style, '*.*'),
      join(__dirname, directory.production.envName, directory.production.resource, directory.production.asset, '*.*'),
      join(__dirname, directory.production.envName, '*.ico'),
      join(__dirname, directory.production.envName, '*.html'),
      join(__dirname, directory.build.envName, '*.*'),
    ]),
    new CopyPlugin([
      {
        from: 'upgrade/**/*',
        to: join(__dirname, directory.production.envName),
      }
    ]),
    new AssetsPlugin({
      path: join(__dirname, directory.build.envName),
      includeManifest: join(__dirname, directory.build.envName, 'manifest'),
    }),
    // new BundleAnalyzerPlugin(),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: chunk => (
            chunk.resource &&
            /\.js$/.test(chunk.resource) &&
            /node_modules/.test(chunk.resource)
          ),
          chunks: 'initial',
          name: 'vendors',
        },
        'async-vendors': {
          test: /[\\/]node_modules[\\/]/,
          minChunks: 2,
          chunks: 'async',
          name: 'async-vendors'
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    },
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
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          discardComments: {
            removeAll: true
          }
        }
      }),
    ],
  },
  target: general.target,
  // devtool: "source-map",
});
