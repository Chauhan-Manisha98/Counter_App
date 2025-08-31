
import React, {useState} from "react";
import ReactDOM from "react-dom/client";

function Counter(){
   let [count, setCount] = useState(0);

   function incrementNumber(){
    count = count+1;
    setCount(count);
  
}

    function decrementNumber(){
        count = count-1;
        setCount(count);

    }
   

   return(
  
    <div id="counter">
        <h1>Count value is:{count}</h1>
        <button onClick={incrementNumber}>Increment {count}</button>
        <button onClick={decrementNumber}>Decrement {count}</button>
    </div>
    
   )
}


ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>)