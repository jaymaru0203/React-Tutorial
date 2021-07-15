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