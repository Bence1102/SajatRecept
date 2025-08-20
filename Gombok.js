import Recept from "./Recept.js";
export default class Gombok{
    #lista=[];
    #szuloElem;
    constructor(lista,szuloElem){
        this.#lista=lista;
        this.#szuloElem=szuloElem
        this.kedvencgomb();
        this.kezdolapgomb();
    }

    kedvencgomb(){
            const kedvcgomb = document.querySelector(".kedvenc");
            kedvcgomb.addEventListener("click", ()=>{
                    const kedvencetel= this.#lista.filter(recept => recept.kedvenc ===true)
                    new Recept(kedvencetel,this.#szuloElem);
            });
    }


    kezdolapgomb(){
            const etelek = document.querySelector(".menu");
            etelek.addEventListener("click", ()=>{
                    new Recept(this.#lista,this.#szuloElem);
            });
    }

}