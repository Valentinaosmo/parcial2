
export enum AttributeButton {
    "categories" = "categories",
    "value"= "value"
    
}

export default class Button extends HTMLElement {
    categories?: string;
    value?: string
    

    static get observedAttributes(){
        const attrs: Record <AttributeButton, null> = {
            categories: null,
            value: null
        
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeButton,
        _: unknown,
        newValue: string
        ){
            switch (propName) {
                default:
                    this[propName] = newValue;
                    break;
            }
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = '';

        const button = this.ownerDocument.createElement('button');
        button.innerText = `${this.value}`
        button.addEventListener('click',() =>{
            button.innerText = `${this.value}`;
        })
        this.shadowRoot?.appendChild(button);
    }
}

customElements.define('app-button',Button);