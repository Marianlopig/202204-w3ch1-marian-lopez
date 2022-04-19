class Personaje {
  nombre;
  familia;
  edad;
  vivo = true;
  serie = "Juego de Tronos";
  img;
  icon;

  constructor(nombrePersonaje, familiaPersonaje, edadPersonaje, img, icon) {
    this.nombre = nombrePersonaje;
    this.familia = familiaPersonaje;
    this.edad = edadPersonaje;
    this.img = img;
    this.icon = icon;
  }

  comunicar() {
    return `${this.nombre} dice: `;
  }

  muere() {
    this.vivo = false;
  }
}

export default Personaje;
