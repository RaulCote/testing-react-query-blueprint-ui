class DataProvider {
  rootUrl: string;

  constructor(rootUrl: string) {
    this.rootUrl = rootUrl;
  }

  async request(url: string, callback?: Function) {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (callback) {
          return callback(data);
        }

        return data;
      });
  }

  getById(path: string, id: number) {
    return this.request(this.rootUrl + path + "/" + id + "/");
  }

  getAll(path: string) {
    return this.request(this.rootUrl + path + "/");
  }
}

export default DataProvider;
