let notes = JSON.parse(localStorage.getItem("notes")) || [];
displayNotes();

function addNote() {
  let input = document.getElementById("noteInput");
  let error = document.getElementById("error");

  if (input.value.trim() === "") {
    error.innerText = "Note cannot be empty!";
    return;
  }

  error.innerText = "";
  notes.push(input.value);
  localStorage.setItem("notes", JSON.stringify(notes));
  input.value = "";
  displayNotes();
}

function displayNotes() {
  let list = document.getElementById("notesList");
  list.innerHTML = "";

  notes.forEach((note, index) => {
    list.innerHTML += `
      <div class="note">
        <p>${note}</p>
        <button class="edit" onclick="editNote(${index})">Edit</button>
        <button onclick="deleteNote(${index})">Delete</button>
      </div>
    `;
  });
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

function editNote(index) {
  let newNote = prompt("Edit your note:", notes[index]);
  if (newNote !== null && newNote.trim() !== "") {
    notes[index] = newNote;
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
  }
}