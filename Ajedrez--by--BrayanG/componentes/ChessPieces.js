const pieces = {
    "bb":"black-bishop",
    "bk":"black-king",
    "bn":"black-knight",
    "bp":"black-pawn",
    "bq":"black-queen",
    "br":"black-rook",
    
    "wb":"white-bishop",
    "wk":"white-king",
    "wn":"white-knight",
    "wp":"white-pawn",
    "wq":"white-queen",
    "wr":"white-rook"
} 

class ChessPieces extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.piece = this.getAttribute("piece");
    }

    static get styles() {
        return /* css */`
            :host {
                display: flex;
                justify-content: center;
            }
            :host(.selected) {
                background: var(--azulClaro);
            }

            .piece{
                width: 100%;
                height: 100%;
                cursor: pointer;
            }
        `;
    }


    connectedCallback() {
        this.render();
    }
 
    render() {
        this.shadowRoot.innerHTML = /* html */`
        <style>${ChessPieces.styles}</style>
        <img class="piece" src="/Pieces/${pieces[this.piece]}.svg" alt=""></img>`;
    }
    
}

customElements.define("chess-pieces", ChessPieces);