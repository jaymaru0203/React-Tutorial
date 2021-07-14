import React, {useState} from 'react';
import Icon from './Components/Icon';
// React Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Bootstrap
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

const tictacArray = new Array(9).fill("");

const App = () => {

    let [isCross, setIsCross] = useState(true);
    let [winMessage, setWinMessage] = useState("");

    const playAgain = () => {
        setIsCross(true);
        setWinMessage("");
        tictacArray.fill("");
    }

    const findWinner = () => {
        if(
            (tictacArray[0] === tictacArray[1] && tictacArray[1] === tictacArray[2] && isFilled(tictacArray[0])) ||
            (tictacArray[3] === tictacArray[4] && tictacArray[4] === tictacArray[5] && isFilled(tictacArray[3])) ||
            (tictacArray[6] === tictacArray[7] && tictacArray[7] === tictacArray[8] && isFilled(tictacArray[6])) ||
            (tictacArray[0] === tictacArray[3] && tictacArray[3] === tictacArray[6] && isFilled(tictacArray[0])) ||
            (tictacArray[1] === tictacArray[4] && tictacArray[4] === tictacArray[7] && isFilled(tictacArray[1])) ||
            (tictacArray[2] === tictacArray[5] && tictacArray[5] === tictacArray[8] && isFilled(tictacArray[2])) ||
            (tictacArray[0] === tictacArray[4] && tictacArray[4] === tictacArray[8] && isFilled(tictacArray[0])) ||
            (tictacArray[2] === tictacArray[4] && tictacArray[4] === tictacArray[6] && isFilled(tictacArray[2]))
        ){
            return true;
        }
        else{
            return false;
        }
    }

    const isFilled = (arr) => {
        return arr === "x" || arr ==="o";
    }

    return(
        <>
            <Icon choice="circle"/>
            <Icon choice="cross"/>
            <Icon />
        </>
    );
}

export default App;