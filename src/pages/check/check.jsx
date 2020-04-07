import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

export default class extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: '签到'
  };

  render() {
    return <View className="check">签到</View>;
  }
}
