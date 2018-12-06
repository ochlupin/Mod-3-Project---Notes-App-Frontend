// @ts-check
// !!Note Class!! - Responsible for handling related to the Note objects
// !!rendering items and forms for editing, keeping track of Note objects (findById)

class Note {
  // Note Constructor
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.content = data.content;
    Note.all.push(this);
  }

  // render method for the Note class
  // call like this noteObject.renderListItem()
  renderListItem() {
    return `
        <li>
        <h3>
        ${this.title}
        <button data-id = ${this.id}>Edit</button>
        </h3>
        </li>
        `;
  }

  renderUpdateForm() {
    return `<form data-id="${this.id}">
            <label>Title</label>
            <p>
            <input type="text" value="${this.title}"/>
            </p>
            <label>Content</label>
            <p>
            <textarea>${this.content}</textarea>
            </p>
            <button type ='submit'> Save Note </button>
            </form>
            `;
  }

  update({
    title,
    content
  }) {
    this.title = title;
    this.content = content;
  }

  // static Class method (called on the whole class vs. individual Class objects)
  // here we declare a findById static method, with similar functionality to what we were using in the functional version .find to get the matching Note object

  static findById(id) {
    return this.all.find(note => note.id === id);
  }
}

Note.all = [];