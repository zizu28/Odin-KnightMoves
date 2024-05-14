class Graph{
    constructor(){
        this.adjacentList = {}
    }

    addVertexToGraph(vertex){
        if(!this.adjacentList[vertex]){
            this.adjacentList[vertex] = [];
        }
    }

    addEdges(u, v){
        if(!this.adjacentList[u]){
            this.adjacentList[u] = [];
        }
        if(!this.adjacentList[v]){
            this.adjacentList[v] = [];
        }

        this.adjacentList[u].push(v);
        this.adjacentList[v].push(u);
    }

    buildGraphForChess(){
        let possibleMoves;
        for(let i = 0; i < 8; i++){
            for(let j = 0; j < 8; j++){
                this.addVertexToGraph(`${i},${j}`)
            }
        }

        for(let i = 0; i < 8; i++){
            for(let j = 0; j < 8; j++){
                possibleMoves = [
                    [i + 2, j + 1], [i + 2, j - 1], [i - 2, j + 1], [i - 2, j - 1],
                    [i + 1, j + 2], [i + 1, j - 2], [i - 1, j + 2], [i - 1, j - 2]
                ];

                for(let [nx, ny] of possibleMoves){
                    if(nx >= 0 && nx < 8 && ny >= 0 && ny < 8){
                        this.addEdges(`${i},${j}`, `${nx},${ny}`)
                    }
                }
            }
        }
    }
}

function knightTrail(from, to){
    const graph = new Graph();
    graph.buildGraphForChess();

    let visitedVertices = new Set();
    visitedVertices.add(from);
    let move = [[from]];

    while(move.length > 0){
        let path = move.shift();
        let currentVertex = path[path.length - 1];

        if(currentVertex === to){
            return path;
        }

        for(const vertex of graph.adjacentList[currentVertex]){
            if(!visitedVertices.has(vertex)){
                visitedVertices.add(vertex);
                move.push([...path, vertex])
            }
        }
    }
    return null;
}

console.log(knightTrail('0,0', '3,3'))
console.log(knightTrail('1,2', '7,7'))
console.log(knightTrail('7,7', '0,0'))