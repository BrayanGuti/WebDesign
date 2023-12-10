import { State } from "../modules/State.js";
import { Turn } from "../modules/Turn.js";

import "./ChessCells.js";

class ChessBoard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.State = new State();
    this.Turn = new Turn();
    this.TargetCell = [];
    this.selectedPiece = null;
  }

  static get styles() {
    return /* css */`
      :host {
        --board-size: 430px;
        --phone-board-size: 300px;
        --cell-size: calc(var(--board-size) / 8);
        --phone-cell-size: calc(var(--phone-board-size) / 8);
        --BeigeClaro: #F0D9B5;
        --verdeOscuro: #006400;
        --blancoOpaco: #CECFC9;
        --azulOscuro: #0A3143;
        --blanco: #ffffff;
        --azulClaro: #276E90;
        --negro: #000000;
      }

      .sombra{
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(var(--phone-board-size) + 4rem);
        width: calc(var(--phone-board-size) + 4rem);
        background-color: var(--blancoOpaco);
        outline: 1px solid rgba(10, 49, 67, 0.5);;
      }
      
      @media (min-width: 768px) { 
        .sombra{
          height: calc(var(--board-size) + 4rem);
          width: calc(var(--board-size) + 4rem);
        }
      }

      .board {
        outline: 2px solid black;
        height: var(--phone-board-size);
        width: var(--phone-board-size);
        display: flex;
        flex-wrap: wrap;
        border: black 
        box-shadow: 0 0 0 2px black;
      }
      @media (min-width: 768px) { 
        .board {
          height: var(--board-size);
          width: var(--board-size);
        }
      }
    `;
  }

  connectedCallback() {
    this.render();
    
  }

  // CELLS
  renderCell(x,char, color){
    const board = this.shadowRoot.querySelector(".board");
    const cell  = document.createElement("chess-cell"); 
    cell.setAttribute("place", ( char + (x).toString()));  
    cell.setAttribute("color", color);
    cell.addEventListener("click", () => { this.onClicks(cell)}); 
    board.appendChild(cell);
  }

  renderCells(){
    let cells = [];
    const letras = "abcdefgh";
    for (let x = 8; x > 0; x--){
      let i = 0
      Array.from(letras).forEach((char) => {
        i++;
        let color;
        if (i %2 === 1 && x%2 === 0){
          color = "white"
        }else if(i %2 === 0 && x%2 === 1){
          color = "white"
        }else{
          color = "black"
        }
        cells.push(this.renderCell(x,char, color));
      });
    }
    return cells.join(""); 
  }

  getCell(place){
    const celda = this.shadowRoot.querySelector(`[place="${place}"]`);
    const divEnShadow = celda.shadowRoot.querySelector('.celda');
    return divEnShadow;
  }

  


  // PEACES
  putPiece(){
    const pieces = [
      { type: "wp", position: ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"] },
      { type: "wr", position: ["a1", "h1"] },
      { type: "wn", position: ["b1", "g1"] },
      { type: "wb", position: ["c1", "f1"] },
      { type: "wq", position: ["d1"] },
      { type: "wk", position: ["e1"] },
      { type: "bp", position: ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"] },
      { type: "br", position: ["a8", "h8"] },
      { type: "bn", position: ["b8", "g8"] },
      { type: "bb", position: ["c8", "f8"] },
      { type: "bq", position: ["d8"] },
      { type: "bk", position: ["e8"] }
    ];
    
    pieces.forEach(piece => {
      piece.position.forEach(pos => {
        this.renderPieces(piece.type, pos);
      });
    }); 
  }

  renderPieces(piece, place){ 
    const celda = this.getCell(place);
    celda.innerHTML = /* html */`<chess-pieces piece="${piece}"></chess-pieces>`;
  }

  // EVENTS
  onClicks(cell) {
    const piece = cell.shadowRoot.querySelector("chess-pieces");
    
    if (this.State.state === 0 && piece && piece.piece[0] === this.Turn.turn) {
      this.selectedPiece = piece;
      this.selectedPiece.classList.add("selected");
      this.State.selectPiece(); 
      this.showPosition(piece, cell);
    
    } else if(this.State.state === 1 && piece === this.selectedPiece){
      this.clearObjectiveCells();
      this.selectedPiece.classList.remove("selected");
      this.selectedPiece = null;
      this.State.neutral();
    
    }else if (this.State.state === 1) {
      if (!piece) {
        this.movePieces(cell.shadowRoot.querySelector(".celda"));
      } else {
        this.clearObjectiveCells();
        this.selectedPiece.classList.remove("selected");
        this.selectedPiece = piece;
        this.showPosition(piece, cell);
        this.selectedPiece.classList.add("selected");
      }
    }
  }
  
  clearObjectiveCells() {
    this.TargetCell.forEach(cell => {
      const objective = cell.querySelector("div");
      cell.removeChild(objective);
      if(cell.underAttack){
        cell.classList.remove("underAttack");
        cell.underAttack = false;
      }
    });
  }

  showPosition(chessPiece, cell) {
    const color = chessPiece.piece[0];
    const piece = chessPiece.piece[1];
    const row = cell.getAttribute("place")[0];
    const column = cell.getAttribute("place")[1];
    this.TargetCell = [];
    

    if (piece === "p") {    
      let direction = (color === "b") ? -1 : 1;
      let advance = (parseInt(column) + direction).toString();
      const cellAdvance = this.getCell(row + advance);
      this.addTargetCell(cellAdvance);
      
      // firstMove
      if ((column === "2" && direction === 1) || (column === "7" && direction === -1)) {
        const cellAdvance2 = this.getCell(row + (parseInt(advance) + direction).toString() );
        this.addTargetCell(cellAdvance2);
      }
    
      for (let i = -1; i < 2; i += 2) {
        const coords = this.shiftedLetter(row, i) + advance;
        const cellUnderAttack = this.getCell(coords);
        
        this.addTargetCell(cellUnderAttack, true);
        
          
        

      }

      this.TargetCell.forEach(cell => {
        if(cell.underAttack){
          cell.classList.add("underAttack");
          console.log("entro");
        }
        cell.appendChild(this.createTargetElement(cell.underAttack));
      });
    }
  }

  addTargetCell(cell,  underAttack = false) {
    if (cell.querySelector("chess-pieces") === null && !underAttack) {
      this.TargetCell.push(cell);
    }
    else if(underAttack && cell.querySelector("chess-pieces") != null ){
      cell.underAttack = true;
      this.TargetCell.push(cell);
    }
  }
  
  shiftedLetter(letter, number) {
    const allowedLetters = ["a", "b","c", "d", "e", "f", "g", "h"];  
    const initialIndex = allowedLetters.indexOf(letter);
    let newIndex = initialIndex + number;
  
    if (newIndex > 7 || newIndex < 0) {
      return "o";  // out of bounds
    }
 
    return allowedLetters[newIndex];
  }

  createTargetElement(underAttack = false) {
    if(underAttack){
      const objetiveCell = document.createElement("div");
      objetiveCell.classList.add("underAttack__circle");
      return objetiveCell;
    }
    const objetiveCell = document.createElement("div");
    objetiveCell.classList.add("objetive");
    return objetiveCell;
  }
  
  movePieces(destiny){
    if(this.TargetCell.includes(destiny)){
      this.Turn.next();
      this.clearObjectiveCells();
      destiny.innerHTML = /* html */`<chess-pieces piece="${this.selectedPiece.piece}"></chess-pieces>`;
      this.selectedPiece.remove();
      this.selectedPiece = null;
      this.State.neutral();   
    }else{
      // reproducir audio de error
    }
  }

  // RENDER
  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${ChessBoard.styles}</style>
    <div class="sombra">
      <div class="board">
        
      </div>
    </div>`;
    this.renderCells()
  }
}


customElements.define("chess-board", ChessBoard);