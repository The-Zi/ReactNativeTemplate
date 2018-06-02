/*
 * @Author: The-Zi
 * @Date: 2018-05-03 11:00:34
 * @Last Modified by: The-Zi
 * @Last Modified time: 2018-05-29 16:52:38
 */





// ==================== 导入模块 ====================
// React 用于字体图标组件
import React from 'react';
// StyleSheet
import { StyleSheet } from 'react-native';

// 字体图标
import Icon from 'react-native-vector-icons/FontAwesome';
// 需要执行这条命令将字体图标的文件关联进原生项目，否则app运行时会找不到字体图标的文件。
// react-native link react-native-vector-icons
// 基础样式
import baseStyles from '../styles/baseStyles';

// 导航器
import { StackNavigator, TabNavigator } from 'react-navigation';

// 页面
import home from '../views/common/Page1';
import user from '../views/common/Page2';




// ==================== 配置 ====================
// 首页子路由配置
const homeSubRouteConfig = {
    // 页面1配置
    "home": {
        // 指向的页面
        screen: home,
        // 导航参数
        navigationOptions: {
            // 顶部导航栏标题
            headerTitle: "home",
            // 在后退按钮上显示的该页面的标题
            headerBackTitle: null,
            // 后退按钮上的替代标题，标题过长时显示
            // headerTruncatedBackTitle: "title",
        }
    },

    // 页面2配置，参考Page1
    "setting": {
        screen: user,
        navigationOptions: {
            headerTitle: "setting",
        }
    },
};


// tabNav 字体图标样式
// let iconStyles = {
//     "_initial": true,
//     // 私有属性：字体图标样式
//     "_icon": {
//         "home": {
//             color: baseStyles.color.lightPrimary,
//             size: baseStyles.size.tabNavIcon,
//         },
//         "content": {
//             color: baseStyles.color.lightPrimary,
//             size: baseStyles.size.tabNavIcon,
//         },
//         "setting": {
//             color: baseStyles.color.lightPrimary,
//             size: baseStyles.size.tabNavIcon,
//         },
//     },

//     // 私有属性：默认样式
//     "_default": {
//         color: baseStyles.color.lightPrimary,
//         size: baseStyles.size.tabNavIcon,
//     },

//     //  私有属性：活动时样式
//     "_active": {
//         color: "#fff",
//         size: baseStyles.size.tabNavIcon,
//     },

//     // 公有方法：获取样式
//     "get": function (params = {}) {
//         // 将初始路由的图标设为活动中样式
//         if (this._icon[params.icon].initial === undefined && params.initial === true){
//             this._icon[params.icon].initial = true;
//             this._icon[params.icon][params.key] = this._active[params.key];
//         }

//         return this._icon[params.icon][params.key]
//     },

//     // 公有方法：切换活动状态
//     "toggle": function(params = {}) {
//         // 通过将全部设为默认样式，关闭活动状态
//         for (const key in this._icon) {
//             if (this._icon.hasOwnProperty(key)) {
//                 if (this._icon[key].initial === true){
//                     this._icon[key].initial = false;
//                 }
//                 this._icon[key] = Object.assign({}, this._icon[key], this._default);
//             }
//         }

//         // 将当前活动中的设为活动状态样式
//         this._icon[params.active].color = this._active.color;
//     },

//     // 公有方法：icon样式
//     style:function (params) {
//       switch (params.icon) {
//           case "home":
//                 return StyleSheet.create({
//                     // marginTop: -1,
//                     // padding: 0,
//                     // paddingTop: 5
//                     // paddingBottom: 1,
//                 })
//               break;

//           case "setting":
//               return StyleSheet.create({
//                   // marginTop: 0,
//               })
//               break;

//           case "content":
//                 return StyleSheet.create({
//                     // marginTop: 0,
//                 })
//               break;
//       }
//     },
// };

// let iconStyle = StyleSheet.create({
//     marginTop: 5,
// });

// 根路由配置
export const rootRouteConfig = {
    "content": {
        screen: user,
        navigationOptions: {
            // tabBarLabel:设置tabBar label名字,优先级比title高
            // title: 设置tittle，优先级比tabBarLabel低,
            // tabBarVisible: true/false当进入这个路由时，tabNav是否可见
            // tabBarIcon:设置tab bar icon，一个返回RN组件的函数
            tabBarIcon: (params) => {
                if (params.focused) {
                    return (<Icon name={"comment"} size={20} color={"#fff"} />)
                } else {
                    return (<Icon name={"comment"} size={20} color={baseStyles.color.lightPrimary} />)
                }
            },
            // 标签导航栏，标签点击事件
            tabBarOnPress: (obj) => {
                // iconStyles.toggle({ active: "content" });
                // 执行完操作后必须执行这个方法，否则无法跳转页面
                obj.jumpToIndex(obj.scene.index)
            },
        }
    },

    "home": {
        screen: StackNavigator(homeSubRouteConfig),
        navigationOptions: {
            // tabBarLabel:设置tabBar label名字,优先级比title高
            // title: 设置tittle，优先级比tabBarLabel低,
            // tabBarVisible: true/false当进入这个路由时，tabNav是否可见
            // tabBarIcon:设置tab bar icon，一个返回RN组件的函数
            tabBarIcon: (params) => {
                if (params.focused) {
                    return (<Icon style={{ height: 110, width: 62, }} name={"home"} size={60} color={"#fff"} />)
                } else {
                    return (<Icon style={{ height: 110, width: 62, }} name={"home"} size={60} color={baseStyles.color.lightPrimary} />)
                }
            },
            // 标签导航栏，标签点击事件
            tabBarOnPress: (obj) => {
                // iconStyles.toggle({ active: "home" });
                // 执行完操作后必须执行这个方法，否则无法跳转页面
                obj.jumpToIndex(obj.scene.index)
            },
        }
    },

    "setting": {
        screen: user,
        navigationOptions: {
            // tabBarLabel:设置tabBar label名字,优先级比title高
            // title: 设置tittle，优先级比tabBarLabel低,
            // tabBarVisible: true/false当进入这个路由时，tabNav是否可见
            // tabBarIcon:设置tab bar icon，一个返回RN组件的函数
            tabBarIcon: (params) => {
                if (params.focused) {
                    return (<Icon name={"cog"} sze={20} color={"#fff"} />)
                } else {
                    return (<Icon name={"cog"} size={20} color={baseStyles.color.lightPrimary} />)
                }
            },
            // 标签导航栏，标签点击事件
            tabBarOnPress: (obj) => {
                // iconStyles.toggle({ active: "setting" });
                // 执行完操作后必须执行这个方法，否则无法跳转页面
                obj.jumpToIndex(obj.scene.index)
            },
        }
    },
};
