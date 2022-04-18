import Component from "./Component.js";

class Img extends Component {

  constructor(className, parentElement, source, alt) {
    super("img", className, parentElement)
    this.element.src = source;
    this.element.alt = alt;
  }
}

export default Img
