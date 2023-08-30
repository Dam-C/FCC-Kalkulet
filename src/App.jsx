import "./App.css";
import { useSelector } from "react-redux";
import { kalkulPads } from "./assets/kalkulPads";
import KalkBTN from "./kalk-btn";

function App() {
  const kalkulus = useSelector((state) => state.kalkul.kalkulus);
  const curr = useSelector((state) => state.kalkul.currentInput);

  return (
    <div id="calculator">
      <div id="display">{kalkulus}</div>
      <div id="current-input">{curr}</div>
      {kalkulPads.map((pad, i) => (
        <KalkBTN
          key={i}
          id={pad.htmlID}
          disp={pad.kalkulDisplay}
          forKalk={pad.specs}
          inputType={pad.kalkType}
        />
      ))}

      {/* <div id="clear" className="pad-btn">
        AC
      </div>
      <div id="divide" className="pad-btn">
        /
      </div>
      <div id="multiply" className="pad-btn">
        x
      </div>
      <div id="nine" className="pad-btn">
        9
      </div>
      <div id="height" className="pad-btn">
        8
      </div>
      <div id="seven" className="pad-btn">
        7
      </div>
      <div id="substract" className="pad-btn">
        -
      </div>
      <div id="six" className="pad-btn">
        6
      </div>
      <div id="five" className="pad-btn">
        5
      </div>
      <div id="four" className="pad-btn">
        4
      </div>
      <div id="add" className="pad-btn">
        +
      </div>
      <div id="three" className="pad-btn">
        3
      </div>
      <div id="two" className="pad-btn" onClick={handleClick}>
        2
      </div>
      <div id="one" className="pad-btn">
        1
      </div>
      <div id="equals" className="pad-btn">
        =
      </div>
      <div id="zero" className="pad-btn">
        0
      </div>
      <div id="decimal" className="pad-btn">
        .
      </div> */}
    </div>
  );
}

export default App;
