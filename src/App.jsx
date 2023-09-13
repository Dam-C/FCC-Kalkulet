import "./App.css";
import { useSelector } from "react-redux";
import { kalkulPads } from "./assets/kalkulPads";
import KalkBTN from "./kalk-btn";

function App() {
  const kalkulus = useSelector((state) => state.kalkul.kalkulus);
  const curr = useSelector((state) => state.kalkul.currentInput);

  return (
    <div id="calculator">
      <div id="full-display">{kalkulus}</div>
      <div id="display">{curr}</div>
      {kalkulPads.map((pad, i) => (
        <KalkBTN
          key={i}
          id={pad.htmlID}
          disp={pad.kalkulDisplay}
          forKalk={pad.specs}
          inputType={pad.kalkType}
        />
      ))}
      <h4 className="creator">by Damien Charlois</h4>
    </div>
  );
}

export default App;
