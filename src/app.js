//  !!App Class!! - Responsible for high level logic of the application (event listeners, )

class App {
  constructor() {
    // Attaches a new Adapter object to the current App object
    // That's why we can call app.adapter.fetchNotes();
    this.adapter = new Adapter();

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.createNotes = this.createNotes.bind(this);
    this.addNotes = this.addNotes.bind(this);
  }

  attachEventListeners() {
    document
      .querySelector("#notes-list")
      .addEventListener("click", this.handleEditClick);

    document
      .querySelector("#update")
      .addEventListener("submit", this.handleFormSubmit);

    // Refactor - abstract out the following functionality => handleEditClick
    // document.querySelector("#notes-list").addEventListener("click", event => {
    //   //   event.target => the edit button
    //   const id = parseInt(event.target.dataset.id);
    //   // We have access to the .id attribute => we can find the Note object in our backend
    //   const clickedNote = Note.findById(id);
    //   console.table(clickedNote);
    //   document.querySelector(
    //     "#update"
    //   ).innerHTML = clickedNote.renderUpdateForm();
    // });

    // Refactor - abstract out the following functionality => handleFormSubmit

    // document.querySelector("#update").addEventListener("submit", event => {
    //   event.preventDefault();
    //   // grabbing the data from the form through event.target propagation
    //   const id = parseInt(event.target.dataset.id);
    //   const editedNote = Note.findById(id);
    //   const title = event.target.querySelector("input").value;
    //   const content = event.target.querySelector("textarea").value;
    //   const bodyJSON = {
    //     title,
    //     content
    //   };

    //   this.adapter
    //     .updateNote(editedNote.id, bodyJSON)
    //     .then(updatedNote => console.log(updatedNote));

    //   // REFACTOR
    //   // the fetch has to hit the right route for that specific Note object
    //   // use string interpolation inside the URL
    //   // fetch(`http://localhost:3000/api/v1/notes/${editedNote.id}`, {
    //   //   method: "PATCH",
    //   //   headers: {
    //   //     "Content-Type": "application/json",
    //   //     Accept: "application/json"
    //   //   },
    //   //   body: JSON.stringify(bodyJSON)
    //   // })
    //   //   .then(r => r.json())
    //   //   // our backend will return the updated Note object as an JSON
    //   //   .then(updatedNote => console.log(updatedNote));
    //   // // At this stage, the backend is update and we can verify that our database has persisted the data from the edit form. However, our DOM is still displaying the pre-edit Note => will be updated after refresh
    // });
  }

  createNotes(notes) {
    notes.forEach(note => {
      new note(note);
    });
    this.addNotes();
  }

  addNotes() {
    document.querySelector("#notes-list").innerHTML = "";
    Note.all.forEach(
      note =>
      (document.querySelector(
        "#notes-list"
      ).innerHTML += note.renderListItem())
    );
  }

  //handler class methods (form and edit) to be used as callbacks to the event listener method above
  // !! Careful with verifying what .this context is everytime we call the class methods
  // we can use .bind(this); to bind the context of the callback

  handleFormSubmit(e) {
    e.preventDefault();
    const id = parseInt(e.target.dataset.id);
    const note = Note.findById(id);
    const title = e.target.querySelector("input").value;
    const content = e.target.querySelector("textarea").value;

    const bodyJSON = {
      title,
      content
    };

    this.adapter.updateNote(note.id, bodyJSON).then(updatedNote => {
      const note = Note.findById(updatedNote.id);
      note.update(updatedNote);
      this.addNotes();
    });
  }

  handleEditClick(e) {
    const id = parseInt(e.target.dataset.id);
    const note = Note.findById(id);
    document.querySelector("#update").innerHTML = note.renderUpdateForm();
  }
}