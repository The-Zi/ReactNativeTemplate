/*
 * @Author: The-Zi
 * @Date: 2018-05-04 16:13:52
 * @Last Modified by: The-Zi
 * @Last Modified time: 2018-05-21 15:24:36
 */




// ==================== 导入模块 ====================
// 导入基础配置
import serverConfig from '../config/serverConfig'




// ==================== 默认导出 ====================
// FetchAwesome：Fetch()的封装
export default class FetchAwesome {
    // 构造函数
    // 返回值：无
    // 参数类型：Object
    // 参数配置：{ serverList: Object, serverName: String, timeout: Number }
    // 参数配置说明：
    // serverList，服务器列表
    // serverName，需要连接的服务器，在服务器列表中的名称
    // timeout，连接的超时限制
    constructor(newConfig) {
        // 默认服务器配置
        this._config = {
            // 服务器列表
            serverList: [],
            // 目标服务器
            server: "",
            // 默认连接超时时间：三十秒
            timeout: 30000,
        };

        // 新配置：如果存在，则覆盖默认服务器配置
        if (newConfig && !Array.isArray(newConfig) && typeof newConfig === "object") {
            this._config = Object.assign({}, this._config, newConfig);
        }

        // 目标服务器：私有属性，从服务器列表中选择需要连接的服务器
        if (!Array.isArray(this._config.serverList) && typeof this._config.serverList === "object" &&
        typeof this._config.server === "string" && this._config.server.length >= 1) {
            // 根据名称获取目标服务器地址
            this._targetServer = this._config.serverList[this._config.server];
        }
    }

    // _baseFetch：私有，基础获取数据方法
    // 返回值：Promise
    // 参数类型：Object
    // 参数配置：{ api: String, queryParams: String, newConfig: Object }
    // 参数配置说明：
    // api，后台服务器数据接口
    // queryParams，使用GET方式获取数据时的查询参数；
    // newConfig，Fetch()的配置信息
    _baseFetch(api = "", queryParams = null, newConfig = null){

        // 参数类型判断
        if (typeof api === "string" &&
            typeof queryParams === "string" &&
            newConfig && !Array.isArray(newConfig) && typeof newConfig === "object") {
            // 请求状态
            let requestStatus = 0;
            // 服务器连接配置
            let config = Object.assign({}, {
                header: {
                    "Content-Type": "application/x-www-form-urlencoded",
                }
            }, newConfig);

            // 执行请求
            return new Promise((resolve, reject) => {
                fetch(this._targetServer + api + queryParams, config).then(response => {
                    if (response.ok) {
                        response.json().then(result => {
                            // 传递请求结果并设置请求状态
                            resolve(result);
                            requestStatus = response.status;
                        }).catch(err => {
                            reject("数据解析失败：" + err);
                        });
                    } else {
                        reject("请求错误，状态码：" + response.status);
                    }
                }).catch(err => {
                    reject("请求失败，错误信息：" + err);
                });

                // 超时处理
                setTimeout(() => {
                    if (requestStatus !== 200) {
                        reject("请求超时，超时限制：" + this._config.timeout + "毫秒");
                    }
                }, this._config.timeout);

            })
        }
    }

    // get：以GET方式获取数据
    // 返回值：Promise
    // 参数类型：api: String, params: Object, config: Object
    // 参数说明：
    // api，后台服务器数据接口
    // params，使用GET方式获取数据时的查询参数；
    // config，Fetch()的配置信息
    get(api = "", params = null, config = {}) {
        // 参数类型判断
        if (typeof api === "string" &&
        params && !Array.isArray(params) && typeof params === "object" &&
        !Array.isArray(config) && typeof config === "object") {

            // forin 循环次数
            let forNum = 0;
            // 参数数量
            let paramsLength = Object.getOwnPropertyNames(params).length;
            // 拼接到url中的查询参数
            let queryParams = "";
            // 连接服务器的方式
            config.method = "GET";

            // 拼接GET方法查询参数
            for (const key in params) {
                if (params.hasOwnProperty(key)) {
                    forNum = forNum + 1;
                    // 判断当前拼接的参数是否是最后一个参数
                    if (forNum === paramsLength) {
                        queryParams = key + "=" + params[key];
                    } else if (paramsLength > 1) {
                        queryParams = key + "=" + params[key] + "&";
                    }
                }
            }

            // 查询参数
            queryParams = "?" + queryParams;

            // 执行请求
            return this._baseFetch(api, queryParams, config);
        }
    }

    // post：以POST方式提交数据
    // 返回值：Promise
    // 参数类型：api: String, data: Object, config: Object
    // 参数说明：
    // api，后台服务器数据接口
    // data，使用POST方式提交数据时的数据内容；
    // config，Fetch()的配置信息
    post(api = "", data = null, config = {}) {
        // 参数类型判断
        if (typeof api === "string" &&
        data && !Array.isArray(data) && typeof data === "object" &&
        !Array.isArray(config) && typeof config === "object") {

            // 连接服务器的方式
            config.method = "POST";

            // 拼接POST方法提交的数据
            let formData = new FormData();
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    formData.append(key, data[key]);
                }
            }

            // POST提交的数据
            config.body = formData;

            // 执行请求
            return this._baseFetch(api, "", config);
        }
    }
}
