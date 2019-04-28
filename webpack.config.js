module.exports = {
  entry: __dirname + "/src/index.js",   //入口文件
  output:{
    path: __dirname + "/dist",   //出口文件
    filename:"shelter.js"        //出口文件名字
  },
  //配置启动端口服务器信息
  devServer: {
    contentBase: "./dist",  // 本地服务器所加载文件的目录
    port:"8080",   // 设置端口号为8088
    inline:true,  // 文件修改后实时刷新
    historyApiFallback:true
  },
  // devtool:'source-map'
}
