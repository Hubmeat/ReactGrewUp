const path = require('path');

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
            }
        ]
    },
    devServer: {        
        port: 8888,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        // host: '0.0.0.0'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
        alias: {
            router: path.join(__dirname, 'src/router'),
            views: path.join(__dirname, 'src/views')
        }
    }
};