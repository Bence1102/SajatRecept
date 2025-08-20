import { receptLista } from "./receptek.js";
export default class Receptkep {
    #lista = [];
    #szuloElem;
    #index=0;
    constructor() {
        this.#lista = receptLista;
        this.#szuloElem = document.querySelector(".nagykep");
        this.megjelenit();
    }

    megjelenit() {
        this.#szuloElem.innerHTML="";
        const recept = this.#lista[this.#index];
        const kep = document.createElement("div");
        kep.innerHTML = `
                 <div class=menukep>
                    <h1>${recept.nev}</h1>
                    <img src="${recept.kep}" alt="${recept.nev}">
                    <p>${recept.leiras}</p>
                    <ul>
                        ${recept.hozzavalok}
                    </ul>
                    <p>${recept.kategoria}</p>
                    <button class="vissza">Vissza</button>
                    <button class="elore">Előre</button>
                  </div>
        `;
            this.#szuloElem.appendChild(kep);
            kep.querySelector(".elozo").addEventListener("click", () => {
            this.#index = (this.#index - 1 + this.#lista.length) % this.#lista.length;
            this.megjelenit();
        });
        kep.querySelector(".kovetkezo").addEventListener("click", () => {
            this.#index = (this.#index + 1) % this.#lista.length;
            this.megjelenit();
        });
    }

}