import React, {useState} from 'react';
import './App.css';
import Display from "./display";
import Buttons from "./buttons";

function App() {

    let [value, setValue] = useState<number>(0);

    function counter() {
        if (value < 5 ) {
        let newValue = ++value;
        setValue(newValue);
        }
    }

    function resetCounter() {
       setValue(0);
    }
    
    return (
    <div className="app">
      <div className="counter">
    <Display screen={value}/>
    <Buttons counter={counter} resetCounter={resetCounter} screen={value}/>
      </div>
    </div>
  );
}

export default App;
