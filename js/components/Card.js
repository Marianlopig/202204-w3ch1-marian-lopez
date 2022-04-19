import Asesor from "../modules/Asesor.js";
import Escudero from "../modules/Escudero.js";
import Luchador from "../modules/Luchador.js";
import Rey from "../modules/Rey.js";
import Component from "./Component.js";

class Card extends Component {
  constructor(parentElement, character) {
    super("div", "card character__card", parentElement);
    this.element.innerHTML = `<div class="card character__card">
            <img
              src="${character.img}"
              alt="${character.nombre} ${character.familia}"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">${character.nombre} ${
      character.familia
    }</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${character.edad} años</li>
                  <li>
                    Estado:
                    <i class="fas fa-thumbs-${
                      character.vivo ? "up" : "down"
                    }"></i>
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  ${
                    character instanceof Rey
                      ? `<li>Años de reinado: ${character.anyosReinado} </li>`
                      : ""
                  }
                   ${
                     character instanceof Luchador
                       ? `<li>Arma: ${character.arma} </li>`
                       : ""
                   }
                   ${
                     character instanceof Luchador
                       ? `<li>Destreza: ${character.destreza} </li>`
                       : ""
                   } 
                   ${
                     character instanceof Escudero
                       ? `<li>Peloteo: ${character.pelotismo} </li>`
                       : ""
                   }
                   ${
                     character instanceof Asesor
                       ? `<li>Asesora a: ${character.asesorado.nombre} </li>`
                       : ""
                   }
                    ${
                      character instanceof Escudero
                        ? `<li>Sirve a: ${character.sirveA.nombre} </li>`
                        : ""
                    }
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji"></i>
          </div>`;
  }
}
export default Card;
