/*
 * @Author: The-Zi
 * @Date: 2018-05-03 11:00:34
 * @Last Modified by: The-Zi
 * @Last Modified time: 2018-05-24 09:21:25
 */




// ==================== 导入模块 ====================
// 导航器
import { StackNavigator, TabNavigator } from 'react-navigation';
import { rootRouteConfig } from './routeConfig';
import { tabNavConfig } from './navigatorConfig';





// ==================== 默认导出：标签导航器 ====================
export default TabNavigator(rootRouteConfig, tabNavConfig);
