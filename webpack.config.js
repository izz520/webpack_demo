const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // 模式
    mode: 'development',
    // 入口文件
    // entry: {
    //     index: "./src/index.js",
    //     about: "./src/page/about.js",
    //     another: './src/another-module.js',
    // },
    entry: {
        index: {
            import: "./src/index.js",
            dependOn: 'home'
        },
        about: {
            import: "./src/page/about.js",
            dependOn: 'home'
        },
        another: {
            import: "./src/page/about.js",
            dependOn: 'home'
        },
    },
    // 输出文件
    output: {
        // 输出的文件名称
        filename: "[name].bundle.js",
        // 输出文件的路径   path.resolve路径
        path: path.resolve(__dirname, "dist"),
        // 每次打包清理dist文件夹
        clean: true,
    },
    // 方便查找错误 --开发环境可以快速定位错误
    devtool: 'inline-source-map',
    // 自动更新代码
    devServer: {
        static: './dist',
    },
    // 多入口需要设置
    optimization: {
        runtimeChunk: 'single',
    },
    // 添加插件
    plugins: [
        new HtmlWebpackPlugin({
            title: 'development',
        }),
    ],
    // 添加打包规则
    module: {
        rules: [
            // 匹配css后缀文件，先使用css-loader，再使用style-loader  （链会逆序执行）
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            // 加载静态资源 //type为固定格式
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            // 加载字体
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    }
}