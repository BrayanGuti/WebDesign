import "./ChessPieces.js";
class ChessCells extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.underAttack = false;
        const observer = new MutationObserver((mutationsList) => {
            for (let mutation of mutationsList) {
            if (mutation.type === 'attributes') {
                const celda = this.shadowRoot.querySelector(".celda");
                if (mutation.attributeName === 'color') {
                    celda.classList.add(mutation.target.getAttribute('color'));
                    celda.id = mutation.target.getAttribute('place');
                }
            }
            }
        });
        observer.observe(this, { attributes: true });
    }

    static get styles() {
        return /* css */`
            :host {
                
                
                box-sizing: border-box;
            }
            
            .objetive{
                width: 30%;
                height: 30%;
                border-radius: 50%; 
                background-color: green; 
            }
            
            .underAttack {
                position: relative;
                display: inline-block;
              }
          
            .underAttack__circle {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              border: 2px solid green; 
              border-radius: 50%;
              box-sizing: border-box;
              width: 90%; 
              height: 90%;
            }

            .celda{
                display: flex;
                justify-content: center;
                align-items: center;
                height: var(--phone-cell-size);
                width: var(--phone-cell-size);
            }
            
            @media (min-width: 768px) { 
                .celda {
                  height: var(--cell-size);
                  width: var(--cell-size);
                }
            }

            .black{
                background-color: var(--azulOscuro);
            }

            .blue{
                background-color: var(--azulClaro);
            }

            .white{
                background-color: var(--blancoOpaco); 
            }
        `;
    }

    connectedCallback() {
        this.render();
     
    }
    
    

    render() {
        this.shadowRoot.innerHTML = /* html */`
        <style>${ChessCells.styles}</style>
        <div class="celda">
        
        </div>`;
    }
}

customElements.define("chess-cell", ChessCells);