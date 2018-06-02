/*
 * @Author: The-Zi
 * @Date: 2018-05-03 10:59:49
 * @Last Modified by: The-Zi
 * @Last Modified time: 2018-05-29 16:16:06
 */




// ==================== 导入模块 ====================
// react模块
import React, { Component } from 'react';
// react-native模块
import { View, Text, Button , StyleSheet, WebView, Dimensions } from 'react-native';
// 后台接口
import { userLogin } from '../../libs/api'




// ==================== 导出组件类 ====================
export default class Page1 extends Component {
  // 构造函数
  constructor(props) {
    // 属性
    super(props);

    // 状态
    this.state = {
      someStatus: null
    };
  }

  // WebView网络资源
  DEFAULT_URL = 'http://www.baidu.com';

  // WebView静态html文件资源
  webView = require("./test.html");

  // react-navigation路由方法封装
  router = {
    go: this.props.navigation.navigate,
    params: this.props.navigation.state.params,
  }

  login(params){
    userLogin(params).then(res => {
      console.log(res.data.user.userName)
    }).catch(err=>{
      console.log(err)
    });
  }

  // 发送数据
  sendData(){
    this.login({ loginName: "wurihui01", password: "wuq900", clientId: 0});
  }

  goPage(){
    this.router.go("setting", {name: "test"});
  }

  // 获取数据
  getData(data) {
    this.sendData(data);
  }

  // 渲染组件
  render() {
    return (
      // 父容器 flex: 1 样式必须，否则WebView无法设置大小
      <View style={{ flex: 1}}>
        <Button onPress={() => { this.goPage() }} title="Go Page2 ->" />
        <WebView style={{ borderWidth: 20,}}
          ref="vieweb"
          // 页面地址
          // source={{ uri: DEFAULT_URL }}
          source={this.webView}

          // 监听页面加载成功事件：发送数据到页面
          onLoad = {() => {
            this.sendData();
          }}

          // 监听信息事件：接收页面发来的数据
          onMessage={
            (event) => {
              // this.getData(event.nativeEvent.data)
            }
          }

          // 样式
          style={{ width:'100%', height:'100%'}}
        />
      </View>
    );
  }
}
