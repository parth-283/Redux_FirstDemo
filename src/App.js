import "./App.css";
import { Counter } from "./features/counter/counter.js";
import { Coin } from "./features/Coin/Coin.js";
import Theme from "./features/theme/Theme";
import { useSelector } from 'react-redux';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {


  const changeBgColor = useSelector(state => state.theme.bgColor)
  return (
    <div className="App" style={{backgroundColor:changeBgColor}}>
      <Counter />
      <br/>
      <Coin />
      <br/>
      <Theme/>
    </div>
  );
}

export default App;
