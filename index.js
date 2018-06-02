/*
 * @Author: The-Zi
 * @Date: 2018-05-14 09:33:44
 * @Last Modified by: The-Zi
 * @Last Modified time: 2018-05-24 09:25:23
 */


//  ==================== 导入模块 ====================
// react-native 模块
import { AppRegistry } from 'react-native';
// 页面导航路由
import app from './src/router/index';




// ==================== 注册根组件/容器 ====================
AppRegistry.registerComponent('ReactNativeTemplate', () => app);
