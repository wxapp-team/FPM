import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtButton, AtNoticebar } from 'taro-ui';
import './index.less';

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: '首页'
  };

  render() {
    return (
      <View className="index">
        <AtNoticebar>这是 NoticeBar 通告栏</AtNoticebar>
        <AtButton type="primary">按钮文案</AtButton>
        <Text>Hello world!</Text>
      </View>
    );
  }
}
