export class State {
    constructor() {
        this.state = 0;
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