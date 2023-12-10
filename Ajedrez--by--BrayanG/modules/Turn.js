export class Turn {
    constructor() {
        this.turn = "w"; // white
    }
    next(){
        if(this.turn == "w"){
            this.turn = "b"; // black
        } else {
            this.turn = "w";
        }
    }
}