export default class Recept {
    #lista = [];
    #szuloElem;
    constructor(lista,szuloElem) {
        this.#szuloElem = szuloElem;
        this.#lista = lista;
        this.megjelenit();
    }

    megjelenit() {
        this.#szuloElem.innerHTML = '';
        this.#lista.forEach((recept) => {
            const receptElem = document.querySelector('.jatekter');
            receptElem.innerHTML += `
                <div class="recept"> 
                    <h1>${recept.nev}</h1>
                    <img src="${recept.kep}" alt="${recept.nev}">
                    <button class="gomb">
                    ${recept.kedvenc ? "Kedvenc" : "Nem kedvenc"}
                    </button>
                </div>
            `;
            const gombok = this.#szuloElem.querySelectorAll('.gomb');
            gombok.forEach((gomb, index) => {
                gomb.addEventListener('click', () => {
                    this.#lista[index].kedvenc = !this.#lista[index].kedvenc;
                    this.megjelenit();
                });
            });
        });
    }
}