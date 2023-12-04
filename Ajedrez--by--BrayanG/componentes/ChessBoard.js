class ChessBoard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get styles() {
        return /* css */`
          :host {
    
          }
    
        `;
      }

      connectedCallback() {
        this.render();
        // this.classList.add(DEFAULT_THEME);
      }

      render() {
        this.shadowRoot.innerHTML = /* html */`
        <style>${ChessBoard.styles}</style>
        <div>
            xdsadasd
        </div>`;
      }
}

customElements.define("chess-board", ChessBoard);

