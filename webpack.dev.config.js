const path = require('path');
var webpack = require('webpack');
var babelpolyfill = require("babel-polyfill");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口文件
    entry: {
        app: [
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.jsx')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    // 出口文件
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[hash].js'
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
                loaders: [
                    'style-loader',
                    'css-loader',
                    'less-loader?{"sourceMap":false}'
                  ],
                exclude: /\.useable\.less$/
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
    devServer: {        
        port: 9090,
        historyApiFallback: true,
        // contentBase: './content',        
        // historyApiFallback:{
        //     index:'./dist/index.html'
        // },
        // contentBase: path.join(__dirname, './content'),
        host: '0.0.0.0'
    },
    devtool: 'inline-source-map',
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
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]
};