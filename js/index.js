import Luchador from "./modules/Luchador.js";
import Rey from "./modules/Rey.js";
import Asesor from "./modules/Asesor.js"
import Escudero from "./modules/Escudero.js"
import characters from "./personajes.js";
import Li from "./components/Li.js";
import Card from "./components/Card.js";



characters.forEach(character => {
  const ul = document.querySelector("ul.characters-list.row.list-unstyled")
  const li = new Li("character col", ul)
  const card = new Card(li.element, character.img, `${character.nombre} ${character.familia}`)
});
