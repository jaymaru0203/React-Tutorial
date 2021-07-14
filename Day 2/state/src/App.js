import React, {useState} from "react";
import './style.css';

const App = () => {
    let [score,setScore] = useState(0);

    function error(){
        document.getElementById("errorBox").innerHTML = "Value Must be Between 0 and 25";
    }

    return(
        <div className="container">
            <h2 style={{marginTop: "30px"}}>This is a Counter App!</h2>
            <h3>Ranging From 0 to 25</h3>

            <div className="number">
                <h1>{score}</h1>
            </div>

            <button onClick={()=>(score<25)? setScore(score+1) : error()}>Increment</button>
            <button onClick={()=>{(score>0)? setScore(score-1) : error()}}>Decrement</button>
            <button onClick={()=>{setScore(0); document.getElementById("errorBox").innerHTML = "";}}>Reset</button>

            <p id="errorBox"></p>
        </div>
    )
    
}

export default App;