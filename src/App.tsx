import './styles.css';
import IMAGE from './react.png';
import LOGO from './logo.svg';
import ClickCounter from './ClickCounter';

export const App = () => {
  return (
    <>
      <h1>
        Hello App - {process.env.NODE_ENV} {process.env.name}
      </h1>

      <img src={IMAGE} alt="React Logo" />
      <img src={LOGO} alt="React Logo Svg" width="300" height="200" />
      <ClickCounter></ClickCounter>
    </>
  );
};

/*
build 환경은 아래 명령어로 실행할 수 있다.

cd build

npx serve 

dev 서버와 prod 서버의 개발자도구 - Network를 통해서 
bundle.js를 보면 확연히 prod 의 bundle.js 사이즈가 더 작은 것을 알 수 있다
*/
