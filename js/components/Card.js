import CardBody from "./CardBody.js";
import Component from "./Component.js";
import Emoji from "./Emoji.js";
import Img from "./Img.js";

class Card extends Component {

  constructor(parentElement, imgSource, imgAlt) {
    super("div", "card character__card", parentElement)
    const img = new Img("character__picture card-img-top", this.element, imgSource, imgAlt)
    const cardBody = new CardBody(this.element)
    const emoji = new Emoji(this.element)
  }

}
export default Card
