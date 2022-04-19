import Personaje from "./Personaje.js";

class Asesor extends Personaje {
  asesorado;
  constructor(
    nombreAsesor,
    familiaAsesor,
    edadAsesor,
    personajeAsesorado,
    img,
    icon
  ) {
    super(nombreAsesor, familiaAsesor, edadAsesor, img, icon);
    if (personajeAsesorado instanceof Personaje) {
      this.asesorado = personajeAsesorado;
    }
  }

  comunicar() {
    return `${super.comunicar()}No sé por qué, pero creo que voy a morir pronto`;
  }
}
export default Asesor;
