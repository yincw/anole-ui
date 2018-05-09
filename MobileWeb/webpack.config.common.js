import { join } from 'path';
import webpack from 'webpack';
import HtmlPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import SpritesmithPlugin from 'webpack-spritesmith';
import SvgSpritePlugin from 'svg-sprite-loader/plugin';
import autoprefixer from 'autoprefixer';
import CopyPlugin from 'copy-webpack-plugin';
import configs, { directory, theme, general, optimizer } from './.vd/project.json';


const DEBUG = process.env.NODE_ENV !== 'production';
// 开发环境
if (DEBUG && process.env.NODE_ENV !== undefined) {
  configs.general.publicPath = '';
}

// less & image 目录
const styleDir = [
  join(__dirname, directory.development.envName),
  join(__dirname, directory.build.envName),
  join(__dirname, 'node_modules'),
];

// svg 目录
const svgDir = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''),
  join(__dirname, directory.development.envName),
];


export default {
  output: {
    path: join(__dirname, directory.production.envName),
    publicPath: general.publicPath + '/',
    filename: directory.production.resource + '/' + directory.production.javascript + '/' + '[name]-[hash:10].js',
    chunkFilename: directory.production.resource + '/' + directory.production.javascript + '/' + '[name]-[contenthash:10].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            extends: join(__dirname, '.babelrc'),
            cacheDirectory: true,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          ( () => { return process.env.operation === 'separateCSS' ? MiniCssExtractPlugin.loader : 'style-loader'; } )(),
          {
            loader: 'css-loader',
            options: {
              minimize: optimizer.css.minimize,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer(optimizer.css.browsers),
              ],
            },
          },
        ],
        include: styleDir,
      },
      {
        test: /\.less$/,
        use: [
          ( () => { return process.env.operation === 'separateCSS' ? MiniCssExtractPlugin.loader : 'style-loader'; } )(),
          {
            loader: 'css-loader',
            options: {
              minimize: optimizer.css.minimize,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer(optimizer.css.browsers),
              ],
            },
          },
          {
            loader: 'less-loader',
            options: {
              modifyVars: theme,
              javascriptEnabled: true,
            },
          },
        ],
        include: styleDir,
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]-[hash:10].[ext]',
              limit: optimizer.asset.limit,
              outputPath: directory.production.resource + '/' + directory.production.asset + '/',
            },
          },
          'image-webpack-loader',
        ],
        include: styleDir,
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              limit: optimizer.asset.extract,
              spriteFilename: directory.production.resource + '/' + directory.production.asset + '/' + 'sprite.svg',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              svgo: {
                plugins: [{
                    cleanupAttrs: true
                  }, // 清理属性换行和重复的空格
                  {
                    cleanupEnableBackground: true
                  }, // 移除或清理 enable-background 属性
                  {
                    cleanupIDs: true
                  }, // 清理未使用的 和 压缩使用的 ID
                  {
                    removeRasterImages: true
                  }, // 移除栅格图标，默认值 false √
                  {
                    removeDimensions: true
                  }, // 移除 width/height 属性，默认值 false √
                  {
                    removeStyleElement: true
                  }, // 移除 <style> 元素，默认值 false √
                ]
              }
            },
          },
        ],
        include: svgDir,
      },
    ]
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new HtmlPlugin({
      template: join(__dirname, directory.development.envName, 'index.ejs'),
      inject: true, // true: 'body', 'head'; false
      // filename: 'index.html',  // index.html
      title: general.html.title,
      description: general.html.description,
      keywords: general.html.keywords,
      favicon: join(__dirname, directory.development.envName, 'favicon.ico'),
      minify: DEBUG ? {} : {
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeScriptTypeAttributes: true,
        trimCustomFragments: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    ...DEBUG ? [
      new MiniCssExtractPlugin({
        filename: directory.production.resource + '/' + directory.production.style + '/' + '[name]-[contenthash:10].css',
        chunkFilename: directory.production.resource + '/' + directory.production.style + '/' + '[name]-[contenthash:10].css',
      }),
    ] : [],
    new SpritesmithPlugin({
      src: {
        cwd: join(__dirname, directory.development.envName, directory.development.sprite),
        glob: '*.png',
      },
      target: {
        image: join(__dirname, directory.build.envName, 'sprite.png'),
        css: join(__dirname, directory.build.envName, 'sprite.less'),
      },
      apiOptions: {
        cssImageRef: 'sprite.png',
      },
    }),
    ...optimizer.asset.extract === true ? [
      new SvgSpritePlugin(),
    ] : [],
    new CopyPlugin([
      {
        context: __dirname,
        from: join(__dirname, directory.development.envName, directory.development.config, 'configs.js'),
        to: join(__dirname, directory.production.envName, directory.production.resource, directory.production.javascript),
      }
    ]),
  ],
  externals: general.externals,
  resolve: {
    alias: general.resolve.alias,
    // Ant Design Mobile（Web）：".web.js"
    extensions: general.resolve.extensions,
    // 普通版：main
    // ES2015+ Version：jsnext:main
    mainFields: general.resolve.mainFields,
    modules: [
      join(__dirname, directory.build.envName),
      join(__dirname, 'node_modules'),
    ],
  },
  performance: {
    hints: DEBUG ? false : 'warning',
    maxAssetSize: general.performance.maxAssetSize,
    maxEntrypointSize: general.performance.maxEntrypointSize,
  },
};
