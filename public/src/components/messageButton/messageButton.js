class MessageButton extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"})
        this.isSelected= false; //Se hace una variable que inicialice en falso para indicar que no esta agregada
    };

    
    connectedCallback(){
        this.render()
    };

    changeMessage(){ //Se crea un nuevo metodo para que haga la funcion de cambiar el mensaje
        this.isSelected= !this.isSelected; //Con la negacion se cambia el valor
        this.render(); //Se renderiza de nuevo para ver los cambios
    };

    render(){
        this.shadowRoot.innerHTML =`
        <button> ${this.isSelected ? 'Agregado' : 'Agregar a fav'}</button> 
        `
        this.shadowRoot.querySelector('button').addEventListener('click', () => this.changeMessage())
        //Para anadir un evento tengo que seleccionar la etiqueta o la clase y anadirle el evento y la funcion que deba hacer. La funcion puede ser un nuevo metodo que yo cree
    };

    //Condicional anidado linea 20 = ? :
};
customElements.define('message-button', MessageButton);
export default MessageButton;

//Pasos
//1. Agregar una variable que inicie en falso
//2. Se pone el shadowroot.innerHTML y se agrega el boton con la variable
//3. Se le agrega el condicional anidado verificando el estado
//4. Se agrega otro shadowroot.innerHTML y se le pone querySelector para coger el boton
//5. En la misma linea de codigo se le agrega el evento que escuche el link y en el otro parametro se le anade el metodo nuevo
//6. Se crea el metodo nuevo con this.(variable)= ! para anadir valores
//7. Se renderiza de nuevo el contenido