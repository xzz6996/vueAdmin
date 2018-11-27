//const webpack =require('webpack')
const path = require('path')
function resolve(dir){
    return path.join(__dirname,dir);
}

module.exports={
    baseUrl:process.env.NODE_ENV === 'production' ? '/dist/' : '/',  
    //文件尽量放在域名根节点
    //baseUrl:process.env.NODE_ENV === 'production' ? '/' : '/'
    outputDir:"dist", 
    lintOnSave:true,
    runtimeCompiler:true,   
    // chainWebpack:config => {  //https://cli.vuejs.org/zh/config/#chainwebpack
    //     config.resolve.alias
    //         .set("@", resolve("src"))
    //         .set("components",resolve("src/components"))
    //         .set("views",resolve("src/views"));
    //         config.resolve.extensions
    //         .add(".vue").add('.js').add('.scss')
    // },
    configureWebpack:(config)=>{
        //原生对webpack配置config
        Object.assign(config,{
            resolve : {
                extensions:['.js','.vue','.json','.css','.scss'],
                alias:{
                    'vue$':'vue/dist/vue.esm.js',
                    '@':resolve('src'),
                    'components':resolve('src/components'),
                }
            }   
        })
    },//https://cli.vuejs.org/zh/config/#configurewebpack  
    productionSourceMap:true,//生产环境是否生成 sourceMap 文件   
    css:{//css相关配置
        // 是否使用css分离插件 ExtractTextPlugin
        extract:true,
        // 开启 CSS source maps?
        sourceMap:true,
        // css预设器配置项
        loaderOptions:{},
        // 启用 CSS modules for all css / pre-processor files.
        modules:false
    }, 
    pwa: {},//PWA插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
   // parallel:require('os').cpus().length > 1,是否为 Babel 或 TypeScript 使用 thread-loader
    devServer:{ // webpack-dev-server 相关配置  https://www.webpackjs.com/configuration/dev-server/
        open:process.platform === 'darwin',//返回当前平台类型('darwin','freebsd','linux','sunos'或者 'win32')
        host:"localhost",
        port:"8080",
        https:false, //dev-server 通过 HTTP 提供服务
        hotOnly:false,
        proxy:{
            '/manage':{
                target:"http://admintest.happymmall.com/",
                changeOrigin:true
            }
        }
    /*
        proxy:{
            "/api":{
                target:"localhost:8080",
                changeOrigin:true,
                pathRePath:{
                    "^/api":"/mock"
                }
            }
        }
    */
       // before:app=>{}
    },
    //第三方插件配置
    pluginOptions:{
        // new webpack.optimize.CommonsChunkPlugin({
        //           name: 'common' // 指定公共 bundle 的名称。
        // })
    }
}