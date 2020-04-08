import Taro, { Component } from '@tarojs/taro';
import { View, Image, Button } from '@tarojs/components';
import {
  AtButton,
  AtModal,
  AtModalContent,
  AtModalAction,
  AtModalHeader
} from 'taro-ui';
import './index.less';

export default class Index extends Component {
  state = {
    isOpened: false
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: '流动党员管理系统'
  };

  onScanCode = () => {
    Taro.scanCode({
      success: res => {
        console.log(res);
        const { scanType } = res;

        if (scanType === 'QR_CODE') {
          Taro.showToast({
            title: '正在加载',
            icon: 'loading',
            duration: 1500
          });
        } else {
          Taro.showToast({
            title: '二维码格式错误'
          });
        }

        setTimeout(() => {
          this.setState({
            isOpened: true
          });
        }, 1500);
      }
    });
  };

  handleClose = () => {
    this.setState({
      isOpened: false
    });
  };

  render() {
    const { isOpened } = this.state;
    return (
      <View className="index-page">
        <View className="card-box">
          <View className="cover">
            <Image src="../../static/images/dy-bg.png" mode="aspectFill" />
          </View>
          <View className="content">
            <Image src="../../static/images/dy-p.png" mode="aspectFit" />
            <AtButton type="primary" onClick={this.onScanCode}>
              流动党员登记
            </AtButton>
          </View>
        </View>

        <AtModal
          isOpened={isOpened}
          onClose={this.handleClose}
          onCancel={this.handleClose}
          onConfirm={this.handleClose}
        >
          <AtModalHeader>党员信息</AtModalHeader>
          <AtModalContent>
            <View className="text-center">
              <Image
                src="../../static/images/avatar.png"
                style="width:100px;height:100px"
              />
            </View>
            <View className="info">
              <View className="label">姓名</View>
              <View className="content">某某</View>
            </View>
            <View className="info">
              <View className="label">姓别</View>
              <View className="content">男</View>
            </View>
            <View className="info">
              <View className="label">出生年月</View>
              <View className="content">1992年07月</View>
            </View>
            <View className="info">
              <View className="label">民族</View>
              <View className="content">汉</View>
            </View>
            <View className="info">
              <View className="label">入党时间</View>
              <View className="content">2014年05月26日</View>
            </View>
            <View className="info">
              <View className="label">转正日期</View>
              <View className="content">2015年05月26日</View>
            </View>
            <View className="info">
              <View className="label">职业信息</View>
              <View className="content">学生</View>
            </View>
            <View className="info">
              <View className="label">手机号码</View>
              <View className="content">13113113131</View>
            </View>
          </AtModalContent>
          <AtModalAction>
            <Button onClick={this.handleClose}>确定</Button>
          </AtModalAction>
        </AtModal>
      </View>
    );
  }
}
