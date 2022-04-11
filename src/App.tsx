import './styles.css';
import IMAGE from './react.png';
import LOGO from './logo.svg';

export const App = () => {
  return (
    <>
      <h1>App</h1>;
      <img src={IMAGE} alt="React Logo" />
      <img src={LOGO} alt="React Logo Svg" width="300" height="200" />
    </>
  );
};
