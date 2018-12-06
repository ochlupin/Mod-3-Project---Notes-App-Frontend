// *****************NOTES APP *********************

document.addEventListener("DOMContentLoaded", () => {
  alert("LOADED");

  allNotesContainer = document.querySelector("#notes-list");

  //**Create new App object and call the .attachEventListeners method on it**/
  const app = new App();
  app.attachEventListeners();

  app.adapter.fetchNotes().then(d => {
    d.forEach(note => {
      allNotesContainer.innerHTML += new Note(note).renderListItem();
    });
  });

  // app.adapter.fetchNotes.then(app.createNotes);

  // !!REFACTORING - Functional to OO!!
  // fetch(notesUrl)
  //   .then(r => r.json())
  //   .then(d => {
  //     console.table(d);
  //     d.forEach(note => {
  //       // create a new Note object, passing in the parsed json as our attribute for that object
  //       const newNote = new Note(note);

  //       // we call the renderListItem() method on our newly created note object newNote to render the HTML
  //       allNotesContainer.innerHTML += newNote.renderListItem();
  //     });
  //   });
});
