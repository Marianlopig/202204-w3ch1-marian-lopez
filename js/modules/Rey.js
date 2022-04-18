import Personaje from "./Personaje.js";


class Rey extends Personaje {
  anyosReinado;

  constructor(nombreRey, familiaRey, edadRey, anyosReinadoRey, img) {
    super(nombreRey, familiaRey, edadRey, img);
    this.anyosReinado = anyosReinadoRey;
  }

  comunicar() {
    return `${super.comunicar()}Vais a morir todos`;
  }
}
export default Rey
