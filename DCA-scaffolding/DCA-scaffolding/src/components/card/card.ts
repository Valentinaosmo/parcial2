import { AttributeButton } from "../buttom/buttom";
import { Buttom } from "../export";

export enum AttributeCard {
 "categories" = "categories",
 "value"= "value"
}

export default class Card extends HTMLElement{
    categories: string = "";
    value : string = "";

    static get observedAttributes(){
        const attrs: Record <AttributeCard,null> = {
            categories: null,
            value : null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeCard,
        _: unknown,
        newValue: string
        ) {
            switch (propName) {
                default:
                this[propName] = newValue;
                break;
            }
            
            this.render();
        }

        constructor(){
            super();
            this.attachShadow({mode: 'open'});
        }

        connectedCallback(){
            this.render();
        }

        render(){
            if(this.shadowRoot) this.shadowRoot.innerHTML = '';

            const container = this.ownerDocument.createElement('section');

        

            const button = this.ownerDocument.createElement('app-button');
            button.setAttribute(AttributeButton.value, this.value);
          
            container.appendChild(button);
        
            this.shadowRoot?.appendChild(container)
        }
}

customElements.define('app-card', Card)
