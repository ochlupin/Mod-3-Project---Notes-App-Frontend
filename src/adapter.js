// @ts-check 
// !!Adapter Class is responsible for handling communication with the API/Backend!! (fetching and updating our objects from the abatabase)!!

class Adapter {
  constructor() {

    //root url for our API, resources agnostic
    this.baseUrl = "http://localhost:3000/api/v1";
    this.headers = {
      "Content-Type": "application/json",
      Accept: "application/json"
    };
  }

  fetchNotes() {
    return this.get(`${this.baseUrl}/notes`);
    // return fetch(`${this.baseUrl}/notes`).then(r => r.json());
  }

  updateNote(id, body) {
    return this.patch(`${this.baseUrl}/notes/${id}`, body);

    // return fetch(`${this.baseUrl}/notes/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json"
    //   },
    //   body: JSON.stringify(body)
    // }).then(r => r.json());
  }

  // Extracting the fetch get request functionality into the get class method
  get(url) {
    return fetch(url).then(r => r.json());
  }

  // Extracting the patch request functionality into the patch class method
  patch(url, body) {
    return fetch(url, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(body),
    }).then(r => r.json());
  }

}