import { useState,useMemo } from "react";
import "./App.css";

function App() {

  const [text,setText] = useState("");

  function handleChange(e) {
   setText(e.target.value);
  }
  const regex = new RegExp(/^\d+$/gm);

 const CheckIsNumber = (text)=>regex.test(text);
    window.check = CheckIsNumber;
  
  const isNumber = useMemo(()=>CheckIsNumber(text), [text]);

  return (
    <div className="App">
     <div className="control has-icons-right">
        <input onChange={handleChange}
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          
        />
          
        <span className="icon is-small is-right">
          <i className={isNumber? "fas fa-check":"fas fa-times"} />
        </span>     
      </div>
    </div>
  );
}

export default App;
