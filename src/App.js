import Calculate from './calculate'
import { useState } from 'react';
import './styles.css'
function App() {

  const [amount,setAmount] = useState(0.0);

  function handleInput(e) {
    let inputValue = document.getElementById("dollar").value;
    setAmount(inputValue)
 
  }
  return (
    <div className="container">
        <label>Enter dollar($) amount to convert to coin</label>
        <input id='dollar' onChange={handleInput} type='number'></input>  

        <Calculate dollar={amount}/>


    </div>
  );
}





export default App;
