import Recept from "./Recept.js";
import Receptkep from "./Receptkep.js";
import Gombok from "./Gombok.js";
import { receptLista } from "./receptek.js";

const jatekter = document.querySelector('.jatekter');
new Recept(receptLista,jatekter);
new Receptkep(receptLista,jatekter)
new Gombok(receptLista,jatekter)