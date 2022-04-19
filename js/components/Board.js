/* eslint-disable no-new */
import characters from "../personajes.js";
import Card from "./Card.js";
import Component from "./Component.js";

class Board extends Component {
  constructor(parentElement) {
    super("ul", "characters-list row list-unstyled", parentElement);
    characters.forEach((character) => {
      const li = document.createElement("li");
      this.element.append(li);
      li.className = "character col";

      new Card(li, character);
    });
  }
}
export default Board;
