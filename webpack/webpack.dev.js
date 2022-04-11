const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('webpack dev'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};

/*
  devServer: {
    hot: true,
  },
  -> 새로고침 하지 않아도 새로고침 되도록 
  -> 주석처리해도 저장하면 새로고침 되는 것은 webpack4부터 기본적으로 활성화되도록 되었기 때문이다

  new ReactRefreshWebpackPlugin(),
  -> 바뀐 부분만 변화하도록

 ClickCounter.tsx의 counter를 증가시킨 다음에, h1 태그 안의 내용 바꾸어도 counter숫자는 초기화 되지 않는다

// https://github.com/pmmmwh/react-refresh-webpack-plugin
*/
