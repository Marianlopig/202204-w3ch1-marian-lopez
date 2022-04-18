class Personaje {
  nombre;
  familia;
  edad;
  vivo = true;
  serie = "Juego de Tronos";
  img;

  constructor(nombrePersonaje, familiaPersonaje, edadPersonaje, img) {
    this.nombre = nombrePersonaje;
    this.familia = familiaPersonaje;
    this.edad = edadPersonaje;
    this.img = img;
  }

  comunicar() {
    return `${this.nombre} dice: `;
  }

  muere() {
    this.vivo = false;
  }
}

export default Personaje
