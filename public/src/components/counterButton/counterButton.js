class CounterButton extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"}) //Se deja en modo abierto para que sea una pista para quien quiera agregar contenido
        this.count= 0; //Se hace una variable que inicialice en 0
    };

    //Este metodo es cuando se conecta en el DOM, se crea la etiqueta vacia sin contenido
    connectedCallback(){
        this.render()
    };

    incrementCount(){ //Se crea un nuevo metodo para que haga la funcion de contar
        this.count ++; //Se anade a la variable los valores
        this.render(); //Se renderiza de nuevo para ver los cambios
    };

    render(){ //Con el attachshadow que dejo la pista, hay que decirle que le agregue ese contenido, entonces ya se ve con contenido adentro
        this.shadowRoot.innerHTML =`
        <button>Counter: ${this.count}</button>
        `
        this.shadowRoot.querySelector('button').addEventListener('click', () => this.incrementCount())
        //Para anadir un evento tengo que seleccionar la etiqueta o la clase y anadirle el evento y la funcion que deba hacer. La funcion puede ser un nuevo metodo que yo cree
    };
};
customElements.define('counter-button', CounterButton);
export default CounterButton;