import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

export default class extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: '我的'
  };

  render() {
    return <View className="check">我的</View>;
  }
}
