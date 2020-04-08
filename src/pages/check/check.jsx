import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';

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
    return (
      <View className="check-page">
        <View className="full-height text-center at-row at-row__align--center">
          <View className="at-col">
            <Image src="../../static/images/coming.png" mode="aspectFit" />
          </View>
        </View>
      </View>
    );
  }
}
