import Personaje from "./Personaje.js";

class Rey extends Personaje {
  anyosReinado;

  constructor(nombreRey, familiaRey, edadRey, anyosReinadoRey, img, icon) {
    super(nombreRey, familiaRey, edadRey, img, icon);
    this.anyosReinado = anyosReinadoRey;
  }

  comunicar() {
    return `${super.comunicar()}Vais a morir todos`;
  }
}
export default Rey;
