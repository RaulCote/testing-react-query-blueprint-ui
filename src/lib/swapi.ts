import DataProvider from "./dataProvider";

const ROOT_URL = "https://swapi.dev/api/";

interface ISwapi {
  rootUrl: string;
  request(url: string, callback?: Function): any;
  getPerson(id: number): any;
}

class Swapi extends DataProvider implements ISwapi {
  getPerson(id: number) {
    return this.getById("people", id);
  }

  getPeople() {
    return this.getAll("people");
  }

  getFilm(id: number) {
    return this.getById("films", id);
  }

  getFilms() {
    return this.getAll("films");
  }

  getPlanet(id: number) {
    return this.getById("planets", id);
  }

  getPlanets() {
    return this.getAll("planets");
  }

  getSpecie(id: number) {
    return this.getById("species", id);
  }

  getSpecies() {
    return this.getAll("species");
  }

  getStarship(id: number) {
    return this.getById("starships", id);
  }

  getStarships() {
    return this.getAll("starships");
  }

  getVehicle(id: number) {
    return this.getById("vehicles", id);
  }

  getVehicles() {
    return this.getAll("vehicles");
  }
}

const starWarsApi = new Swapi(ROOT_URL);

export default starWarsApi;
