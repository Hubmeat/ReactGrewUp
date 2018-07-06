const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin")

commonConfig = {
    devtool: 'cheap-module-source-map',
    entry: {
        app: [
            path.join(__dirname, 'src/index.jsx')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        publicPath : '/'
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     use: ['babel-loader?cacheDirectory=true'],
            //     exclude: /(node_modules)/
            // }, {    
            //     test: /\.jsx?$/,    
            //     exclude: /(node_modules|bower_components)/,    
            //     loader: 'babel-loader', 
            //     query: {    
            //       presets: ['react', 'es2015']    
            //     }    
            // }
            {
                test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader'
            },{
                test: /\.css$/,
                exclude: /\.useable\.css$/,
                loader: "style-loader!css-loader"
            }, {
                test: /\.useable\.css$/,
                exclude: /node_modules/,
                loader: "style-loader/useable!css-loader"
            }, {
                test: /\.less?$/,
                // loaders: [
                //     'style-loader',
                //     'css-loader',
                //     'less-loader?{"sourceMap":false}'
                // ],
                exclude: /\.useable\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "less-loader?{'sourceMap':false}"]
                })
            }, {
                test: /\.useable\.less$/,
                exclude: /node_modules/,
                loader: "style-loader/useable!css-loader!less-loader"
            }, {
                test: /\.(png|jpg|gif|JPG|GIF|PNG|BMP|bmp|JPEG|jpeg)$/,
                exclude:/node_modules/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        outputPath: 'images/'
                    }
                }]
            }, {
                test: /\.(eot|woff|ttf|woff2|svg)$/,
                use: 'url-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
        alias: {
            router: path.join(__dirname, 'src/router'),
            views: path.join(__dirname, 'src/views')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }),
        new UglifyJSPlugin(),
        new CleanWebpackPlugin(['dist']),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
             }
        })
    ]
};

module.exports = commonConfig;
