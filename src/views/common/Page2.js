/*
 * @Author: The-Zi
 * @Date: 2018-05-03 10:59:28
 * @Last Modified by: The-Zi
 * @Last Modified time: 2018-05-21 17:33:52
 */




// ==================== 导入模块 ====================
// react模块
import React, { Component } from 'react';
// react-native模块
import { View, Text, Button, StyleSheet } from 'react-native';




// ==================== 样式声明 ====================-
const Styles = StyleSheet.create({
  someClass: {
    display: 'flex',
  }
});




// ==================== 导出组件类 ====================
export default class Page2 extends Component {
  // 构造函数
  constructor(props) {
    // 属性
    super(props);
    // this.props.name + this.name;

    // 状态
    this.state = {
      someStatus: null
    };
  }

  // 封装react-navigation方法
  router = {
    // 跳转到指定路由名
    go: this.props.navigation.navigate,
    // 路由参数
    params: this.props.navigation.state.params,
    // 返回上一页
    goBack: this.props.navigation.goBack,
  }

  // 生命周期
  componentWillUnmount() {
    //
  }

  // 渲染组件
  render() {
    return (
      <View>
        <Text>Page2</Text>
      </View>
    );
  }
}
