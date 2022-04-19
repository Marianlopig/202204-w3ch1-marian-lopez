import Component from "./Component.js";

class Communication extends Component {
  constructor(parentElement, character) {
    super("div", "comunications", parentElement);
    this.element.innerHTML = `
      <p class="comunications__text display-1">${character.comunicar()}</p>
      <img
        class="comunications__picture"
        src="${character.img}"
        alt="${character.nombre} ${character.familia}"
      />`;
  }

  show() {
    this.element.className = "comunications on";
  }
}
export default Communication;
