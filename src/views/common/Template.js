/*
 * @Author: The-Zi
 * @Date: 2018-05-03 10:58:28
 * @Last Modified by: The-Zi
 * @Last Modified time: 2018-05-21 17:32:36
 */





// ==================== 导入模块 ====================
// react模块
import React, { Component } from 'react';
// react-native模块
import { View, Text, StyleSheet } from 'react-native';




// ==================== 样式声明 ====================-
const Styles = StyleSheet.create({
    someClass: {
        display: 'flex',
    }
});




// ==================== 导出组件类 ====================
export default class Template extends Component {
    // 构造函数
    constructor(props) {
        // 在构造函数中操作props
        super(props);
        // this.props.name + this.name;

        // 状态
        this.state = {
            someStatus: null
        };
    }

    // 封装react-navigation方法
    router = {
        // go：跳转到指定页面
        // 类型：funciton
        // 返回值：无
        // 使用说明：跳转到路由配置中的路由名，指向的页面
        // 参数：routeName, params
        // 参数类型：String, Object
        // 参数说明：
        // routeName，路由配置中自定义的路由名
        // params，传递给跳转页面的参数
        go: this.props.navigation.navigate,
        // params：传递过来的参数
        // 类型：Object
        params: this.props.navigation.state.params,
        // goBack：后退
        // 类型：function
        // 返回值：无
        // 使用说明：回到上一页
        // 参数：无
        goBack: this.props.navigation.goBack,
    }

    // 生命周期
    // componentWillMount：在渲染前调用
    // componentDidMount：第一次渲染后调用
    // componentWillReceiveProps：在组件接收到一个新的 prop (更新后)时被调用
    // shouldComponentUpdate：返回一个布尔值,在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
    // 可以在你确认不需要更新组件时使用。
    // componentWillUpdate：在组件接收到新的props或者state但还没有render时被调用
    // componentDidUpdate：在组件完成更新后立即调用，在初始化时不会被调用
    // componentWillUnmount：在组件从 DOM 中移除的时候立刻被调用
    componentWillUnmount() {
        // someCode
    }

    // 渲染组件
    render() {
        return (
            <View>
                <Text>Template</Text>
            </View>
        );
    }
}
