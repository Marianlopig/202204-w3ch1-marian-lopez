import Luchador from "./modules/Luchador.js";
import Rey from "./modules/Rey.js";
import Asesor from "./modules/Asesor.js"
import Escudero from "./modules/Escudero.js"

const joffrey = new Rey("Joffrey", "Baratheon", 16, 2, "img/joffrey.jpg");
const jaime = new Luchador("Jaime", "Lannister", 45, "Espada", 7, "img/jaime.jpg");
const daenerys = new Luchador("Daenerys", "Targaryen", 30, "Dragones", 10, "img/daenerys.jpg");
const tyrion = new Asesor("Tyrion", "Lannister", 40, daenerys, "img/tyrion.jpg");
const bronn = new Escudero("Bronn", "AguasNegras", 54, 0, jaime, "img/bronn.jpg");
const characters = [joffrey, jaime, daenerys, tyrion, bronn];



export default characters
