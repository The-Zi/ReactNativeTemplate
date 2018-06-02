/*
 * @Author: The-Zi
 * @Date: 2018-05-14 15:44:57
 * @Last Modified by: The-Zi
 * @Last Modified time: 2018-05-29 16:39:10
 */




// ==================== 导航器配置 ====================
import baseStyles from '../styles/baseStyles';




// ==================== 导航器配置 ====================
// 标签条导航器配置
export const tabNavConfig = {
        // 默认路由,第一次进入的界面
        initialRouteName: 'home',
        animationEnabled: true,
        // tabBarComponent - tab bar的组件
        // animationEnabled - 是否有动画
        // order - 界面顺序
        // paths - 可以设置跳转顺序
        // backBehavior - 按 back 键是否跳转到第一个Tab(首页) ， none 为不跳转
        // 标签栏定位
        tabBarPosition: "bottom",
        // 是否全部加载标签栏，建议设为true，用户体验会比较流程
        lazy: true,
        // 是否可以左右滑动切换tab
        swipeEnabled: true,
        // 标签栏参数
        tabBarOptions: {
            // 是否显示label
            showLabel: false,
            // 显示图标
            showIcon: true,
            // tabBarOptions这个看下面的详解:
            // tabBarOptions（TabBarTop）
            // activeTintColor - 激活版块的颜色
            // activeBackgroundColor - 激活版块的背景颜色
            // inactiveTintColor - 非激活版块的颜色
            // inactiveBackgroundColor - 非激活版块的背景颜色
            // upperCaseLabel - label是否全部大写，默认是true
            // pressColor - 点击颜色(Android >= 5.0 only)
            // pressOpacity - 点击透明度(iOS and Android < 5.0 only)
            // scrollEnabled - 是否使用scrollable
            // tabStyle - tab的style
            // indicatorStyle - 指示器style
            // labelStyle - label的style
            // iconStyle - icon的style
            // style - tab bar的style

            // tabBarOptions（TabBarBottom）
            // activeTintColor - 激活版块label文字的颜色
            // activeBackgroundColor - 激活版块的背景颜色
            // inactiveTintColor - 非激活版块的颜色
            // inactiveBackgroundColor - 非激活版块的背景颜色
            // tab bar的style
            style: {
                backgroundColor: baseStyles.color.primary,
                // height: 50,
            },

            // tab的style
            tabStyle: {
                position: 'absolute',
                bottom: 0,
                // left: 0,
                // backgroundColor: "red",
                // width: 5,
                // paddingTop: 5,
                // paddingBottom: 5,
                // paddingLeft: 0,
                // paddingRight: 0,
            },
            // label的style
            labelStyle: {},
        }
};


// 标签条导航器配置
export const stackNavigatorConfig = {
        // 标签栏定位
        tabBarPosition: "bottom",
        // 标签栏参数
        tabBarOptions: {
            // 显示图标
            showIcon: true,
        },
        // 是否全部加载标签栏
        lazy: true,
};
