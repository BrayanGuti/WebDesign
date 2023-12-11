export class Watch {
    constructor(chessBoard) {
        this.chessBoard = chessBoard;
        console.log(this.chessBoard);
    }
    neutral(){
        this.state = 0;
    }
    selectPiece(){
        this.state = 1;
    }
    waitinForSelection(){
        this.state = 2;
    }
}