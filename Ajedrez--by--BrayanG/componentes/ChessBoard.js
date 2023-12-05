import "./ChessCells.js";
class ChessBoard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --board-size: 450px;
        --cell-size: calc(var(--board-size) / 8);
        --BeigeClaro: #F0D9B5;
        --verdeOscuro: #006400;
        --blanco: #ffffff;
        --negro: #000000;
      }
      .board {
        background-color: var(--verdeOscuro);
        height: var(--board-size);
        width: var(--board-size);
        display: flex;
        flex-wrap: wrap;
        

      }
    `;
  }

  connectedCallback() {
    this.render();
    
  }

  renderCell(x,char){
    return /*hmtl*/`
      <chess-cell x="${x}" char="${char}"> </chess-cell>`;
  }

  renderCells(){
    let cells = [];
    const letras = "abcdefgh";
    for (let x = 9; x > 1; x--){
      Array.from(letras).forEach((char) => {
        cells.push(this.renderCell(x,char));
      });
    }
    return cells.join(""); 
  }
  

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${ChessBoard.styles}</style>
    <div class="board">
      ${this.renderCells()}
    </div>`;
  }
}

customElements.define("chess-board", ChessBoard);