import * as components from "./components/indexPadre.js"
import { dataCards } from "./data/charactersData.js" // Se importa solamente la data

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"})
    };

    connectedCallback(){
        this.render();
    };

    render(){

        dataCards.forEach((element)=>{
            this.shadowRoot.innerHTML +=`
            <character-card
            name="${element.name}"
            gender="${element.gender}"
            image="${element.image}">
            </character-card>
            <counter-button></counter-button> 
            `
        });

        this.shadowRoot.innerHTML+=``;
        //Se pone afuera del foreach y se anade el mas-igual para que vaya sumando, pero ahi quedaria solo un contador general,
        //mientras que si se renderiza despues de las tarjetas, queda para cada una de las tarjetas
    };

};
customElements.define("app-container", AppContainer)