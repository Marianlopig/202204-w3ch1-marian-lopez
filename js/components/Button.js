import Component from "./Component.js";

class Button extends Component {
  text;
  action;
  constructor(parentElement, className, text, action) {
    super("button", className, parentElement);
    this.text = text;
    this.action = action;
    this.element.innerHTML = text;

    this.element.addEventListener("click", () => {
      action();
    });
  }
}
export default Button;
