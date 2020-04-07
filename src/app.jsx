import Taro, { Component } from '@tarojs/taro';
import 'taro-ui/dist/style/index.scss';
import Index from './pages/index';
import './app.less';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  config = {
    pages: [
      'pages/index/index',
      'pages/check/check',
      'pages/maps/maps',
      'pages/my/my'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      backgroundColor: '#fafafa',
      borderStyle: 'white',
      selectedColor: '#AB956D',
      color: '#666',
      list: [
        {
          pagePath: 'pages/index/index',
          iconPath: './static/images/home.png',
          selectedIconPath: './static/images/home@selected.png',
          text: '首页'
        },
        {
          pagePath: 'pages/check/check',
          iconPath: './static/images/category.png',
          selectedIconPath: './static/images/category@selected.png',
          text: '打卡'
        },
        {
          pagePath: 'pages/maps/maps',
          iconPath: './static/images/cart.png',
          selectedIconPath: './static/images/cart@selected.png',
          text: '组织地图'
        },
        {
          pagePath: 'pages/my/my',
          iconPath: './static/images/my.png',
          selectedIconPath: './static/images/my@selected.png',
          text: '我的'
        }
      ]
    }
  };

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById('app'));
