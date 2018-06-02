/*
 * @Author: The-Zi
 * @Date: 2018-05-17 14:39:54
 * @Last Modified by: The-Zi
 * @Last Modified time: 2018-05-21 15:25:15
 */




// ==================== 导入模块 ====================
// 服务器配置文件
import serverConfig from '../config/serverConfig'
// Fetch 工具
import FetchAwesome from '../fetch/FetchAwesome';




// ==================== FetchAwesome实例 ====================
const baseAPI = new FetchAwesome({
    serverList: serverConfig,
    server: "base",
});




// ==================== 导出API ====================
export const userLogin = (params)=>{
    return baseAPI.post("login", params);
};
