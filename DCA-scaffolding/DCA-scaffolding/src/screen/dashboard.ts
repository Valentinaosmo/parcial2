import {getData} from '../services/GetData'
import { getData2 } from '../services/GetData2';
import { AttributeCard } from '../components/card/card'
import { ApiType } from '../types/apiType'
import "../components/export"

class Dashboard extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    async connectedCallback(){
        const data = await getData();
        this.render(data)
    }

    render(data:any){
        if(this.shadowRoot) this.shadowRoot.innerHTML = '';

        data.forEach((e: ApiType) => {
            const card = this.ownerDocument.createElement('app-card');
            card.setAttribute(AttributeCard.value, e.value);
            card.setAttribute(AttributeCard.categories, e.categories)
        
            this.shadowRoot?.appendChild(card);
        });
    }
}

customElements.define('app-dashboard',Dashboard);
