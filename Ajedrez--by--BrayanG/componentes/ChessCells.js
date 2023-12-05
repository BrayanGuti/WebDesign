class ChessCells extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.x = this.getAttribute("x");
        this.char = this.getAttribute("char");
    }

    static get styles() {
        // if(this.x % 2 == 0 && this.char % 2 == 0){
        return /* css */`
            :host {
                display: flex;
                justify-content: center;
                align-items: center;
                hight: var(--cell-size);
                width: var(--cell-size);
                border: 1px solid black;
                box-sizing: border-box;
            }

        `;
    }

    connectedCallback() {
        this.render();
        let numeroDecimal = parseFloat(this.x); // Convierte a 3.14 (número de punto flotante)

     
    }

    render() {
        this.shadowRoot.innerHTML = /* html */`
        <style>${ChessCells.styles}</style>
        <div>
             ${this.char} x ${this.x}
        </div>`;
    }
}

customElements.define("chess-cell", ChessCells);