import Luchador from "./Luchador.js";
import Personaje from "./Personaje.js";

class Escudero extends Personaje {
  sirveA;
  pelotismo;

  constructor(
    nombreEscudero,
    familiaEscudero,
    edadEscudero,
    valorPelotismo,
    personajeSirve,
    img,
    icon
  ) {
    super(nombreEscudero, familiaEscudero, edadEscudero, img, icon);
    this.pelotismo = this.filtrarPelotismo(valorPelotismo);
    if (personajeSirve instanceof Luchador) {
      this.sirveA = personajeSirve;
    }
  }

  filtrarPelotismo(gradoPelotismo) {
    if (gradoPelotismo < 0) {
      return 0;
    }
    if (gradoPelotismo > 10) {
      return 10;
    }
    return gradoPelotismo;
  }

  comunicar() {
    return `${super.comunicar()}Soy un loser`;
  }
}
export default Escudero;
