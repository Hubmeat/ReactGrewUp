const path = require('path');
var babelpolyfill = require("babel-polyfill");

module.exports = {
    // 入口文件
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/index.jsx')
    ],
    // 出口文件
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
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
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        // host: '0.0.0.0'
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
        alias: {
            router: path.join(__dirname, 'src/router'),
            views: path.join(__dirname, 'src/views')
        }
    }
};