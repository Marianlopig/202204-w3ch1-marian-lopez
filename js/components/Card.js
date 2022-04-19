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
              <h2 class="character__name card-title h4">${character.nombre} ${character.familia}</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${character.edad} años</li>
                  <li>
                    Estado:
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  <li>Años de reinado: X</li>
                  <li>Arma: XXX</li>
                  <li>Destreza: X</li>
                  <li>Peloteo: X</li>
                  <li>Asesora a: X</li>
                  <li>Sirve a: X</li>
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
