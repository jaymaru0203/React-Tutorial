import React, {useState} from 'react';
import Icon from './Components/Icon';
// React Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Bootstrap
import { Button, Container, Card, CardBody, Row, Column, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

const tictacArray = new Array(9).fill("");

const App = () => {

    let [isCross, setIsCross] = useState(null);
    let [newGame, setNewGame] = useState(true);
    let [winMessage, setWinMessage] = useState("");

    const playAgain = () => {
        setNewGame(true);
        setIsCross(true);
        setWinMessage("");
        tictacArray.fill("");
    }

    const display = (variable) => {
        if(variable == "cross"){
            return "X";
        }
        else{
            return "O";
        }
    }

    const findWinner = () => {
        if(tictacArray[0] === tictacArray[1] && tictacArray[1] === tictacArray[2] && tictacArray[0]){
            setWinMessage(display(tictacArray[0]) + " has Won!");
            return toast(display(tictacArray[0]) + " has Won!", {type: "success"});
        }
        else if(tictacArray[3] === tictacArray[4] && tictacArray[4] === tictacArray[5] && tictacArray[3]){
            setWinMessage(display(tictacArray[3]) + " has Won!");
            return toast(display(tictacArray[3]) + " has Won!", {type: "success"});
        }
        else if(tictacArray[6] === tictacArray[7] && tictacArray[7] === tictacArray[8] && tictacArray[6]){
            setWinMessage(display(tictacArray[6]) + " has Won!");
            return toast(display(tictacArray[6]) + " has Won!", {type: "success"});
        }
        else if(tictacArray[0] === tictacArray[3] && tictacArray[3] === tictacArray[6] && tictacArray[0]){
            setWinMessage(display(tictacArray[0]) + " has Won!");
            return toast(display(tictacArray[0]) + " has Won!", {type: "success"});
        }
        else if(tictacArray[1] === tictacArray[4] && tictacArray[4] === tictacArray[7] && tictacArray[1]){
            setWinMessage(display(tictacArray[1]) + " has Won!");
            return toast(display(tictacArray[1]) + " has Won!", {type: "success"});
        }
        else if(tictacArray[2] === tictacArray[5] && tictacArray[5] === tictacArray[8] && tictacArray[2]){
            setWinMessage(display(tictacArray[2]) + " has Won!");
            return toast(display(tictacArray[2]) + " has Won!", {type: "success"});
        }
        else if(tictacArray[0] === tictacArray[4] && tictacArray[4] === tictacArray[8] && tictacArray[0]){
            setWinMessage(display(tictacArray[0]) + " has Won!");
            return toast(display(tictacArray[0]) + " has Won!", {type: "success"});
        }
        else if(tictacArray[2] === tictacArray[4] && tictacArray[4] === tictacArray[6] && tictacArray[2]){
            setWinMessage(display(tictacArray[2]) + " has Won!");
            return toast(display(tictacArray[2]) + " has Won!", {type: "success"});
        }
    }

    // const isFilled = (arr) => {
    //     return arr === "x" || arr ==="o";
    // }

    const changeItem = (index) => {
        if(newGame){
            return toast("Choose X or O!", {type: "warning"})
        }
        if(winMessage){
            return toast("Game is Already Over!", {type: "error"});
        }
        if(tictacArray[index] == ""){
            tictacArray[index] = isCross ? "cross" : "circle";
            setIsCross(!isCross);
        }
        else{
            return toast("Place is Filled Already!", {type: "warning"});
        }

        findWinner();

    }

    return(
        <>
            <Container className="p-4">
                <ToastContainer position="bottom-center" />
                <Row>
                    <Col md={6} className="offset-md-3">
                        { 
                            newGame ? (
                                <div className="text-center">
                                    <h1>Choose X or O</h1>
                                    <button className="btn btn-dark mb-3 mx-3" onClick={() => {setIsCross(true);setNewGame(false)}}> X </button>
                                    <button className="btn btn-dark mb-3 mx-3" onClick={() => {setIsCross(false);setNewGame(false)}}> O </button>
                                </div>
                            ) : (
                                winMessage ? (
                                    <div className="text-center">
                                        <h1>{winMessage}</h1>
                                        <button className="btn btn-dark mb-3" onClick={playAgain}>Play Again</button>
                                    </div>
                                ) : (
                                    <div className="text-center">
                                        <h1 className="text-center">
                                            {isCross ? "X's Turn" : "O's Turn"}
                                        </h1>
                                        <button className="btn btn-dark mb-3" onClick={playAgain}>Reset Game</button>
                                    </div>
                                )
                            )
                            
                        
                        }

                        <div className="grid mt-2">
                            {tictacArray.map((value, index) => (
                                <Card onClick={()=>{changeItem(index);}}>
                                    <CardBody className="box">
                                        <Icon choice={tictacArray[index]}/>
                                    </CardBody>
                                </Card>
                            ))}               
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;