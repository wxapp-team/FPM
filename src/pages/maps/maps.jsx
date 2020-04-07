import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

export default class extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: '地图'
  };

  render() {
    return <View className="check">地图</View>;
  }
}
