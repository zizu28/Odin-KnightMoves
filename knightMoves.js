function knightMoves(from, to){
    let shortestMove = [from];
    let edgeXDifference = Math.abs(from[0] - to[0]);
    let edgeYDifference = Math.abs(from[1] - to[1]);
    if(edgeXDifference === 1 && edgeYDifference === 1){
        return [edgeXDifference, edgeYDifference];
    }
    let move;
    let possibleMove;
    let xRemainder;
    let yRemainder;
    while(from){
        if(to.every( ele => from.includes(ele)) && from.every( ele => to.includes(ele))){
            return shortestMove;
        }
        if(xRemainder > 1 && yRemainder > 1){
            possibleMove = [[from[0] + 1, from[1] + 2], [from[0] + 2, from[1] + 1]]
            move = possibleMove[Math.floor(Math.random() * 2)]
            xRemainder = Math.abs(to[0] - move[0]);
            yRemainder = Math.abs(to[1] - move[1]);
            shortestMove.push(move);
            possibleMove.splice(0, 2)
            from = move;
        }
        else if(xRemainder === 1 && yRemainder > 1){
            possibleMove = [[from[0] + xRemainder, from[1] + 2], [from[0] + xRemainder, from[1] + 1]]
            move = possibleMove[Math.floor(Math.random() * 2)]
            xRemainder = Math.abs(to[0] - move[0]);
            yRemainder = Math.abs(to[1] - move[1]);
            shortestMove.push(move);
            possibleMove.splice(0, 2)
            from = move;
        }
        else if(xRemainder > 1 && yRemainder === 1){
            possibleMove = [[from[0] + 2, from[1] + yRemainder], [from[0] + 1, from[1] + yRemainder]]
            move = possibleMove[Math.floor(Math.random() * 2)]
            xRemainder = Math.abs(to[0] - move[0]);
            yRemainder = Math.abs(to[1] - move[1]);
            shortestMove.push(move);
            possibleMove.splice(0, 2)
            from = move;
        }
        else if(xRemainder === 0 && yRemainder > 2){
            move = [from[0], from[1] + 2]
            yRemainder -= 2;
            shortestMove.push(move);
            from = move;
        }
        else if(xRemainder === 0 && yRemainder >= 1){
            move = [from[0], from[1] + yRemainder]
            yRemainder = 0;
            shortestMove.push(move);
            from = move;
        }
        else if(xRemainder > 2 && yRemainder === 0){
            move = [from[0] + 2, from[1]]
            xRemainder -= 2;
            shortestMove.push(move);
            from = move;
        }
        else if(xRemainder >= 1 && yRemainder === 0){
            move = [from[0] + xRemainder, from[1]]
            xRemainder = 0;
            shortestMove.push(move);
            from = move;
        }
        else if(xRemainder === 1 && yRemainder === 1){
            move = [from[0] + xRemainder, from[1] + yRemainder]
            shortestMove.push(move);
            from = move;
        }
        else{
            possibleMove = [[from[0] + 1, from[1] + 2], [from[0] + 2, from[1] + 1]]
            move = possibleMove[Math.floor(Math.random() * 2)]
            xRemainder = Math.abs(to[0] - move[0]);
            yRemainder = Math.abs(to[1] - move[1]);
            shortestMove.push(move);
            possibleMove.splice(0, 2)
            from = move;
        }
    }
    return shortestMove;
}

console.log(knightMoves([0, 1], [6, 7]))