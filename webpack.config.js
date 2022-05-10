const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        /** Будет запускать сервер на localhost:8080 */
        port: 8080,
        hot: true,
        open: true,
    },
    watch: true,
    output: {
        filename: '[name].[contenthash].js', // динамичное и уникальное имя файла
        path: path.resolve(__dirname, 'docs'),
        clean: true, // для очистки папки docs при новом билде
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Virtual Keyboard',
        }),
    ],
    module: {
        rules: [
            /** Babel **/
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            /** CSS */
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            /** SCSS/SAAS */
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            /** Картинки */
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            /** Шрифты */
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            /** Файлы CSV */
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            /** Файлы XML */
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
        ],
    },
};
