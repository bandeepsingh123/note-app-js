import { saveNotes, loadNotes } from "./storage.js";

// generate unique id for notes
export function generateNoteId() {
  return Date.now().toString() + Math.random().toString(36).substring(2);
}

export function createNote(title, content, folderId, tags = []) {
  const noteObj = {
    id: generateNoteId(),
    title: title,
    content: content,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    folderId: folderId,
    tags: tags,
  };

  return noteObj;
}

export function getAllNotes() {
  // load from storage and return notes array
  return loadNotes();
}

// get all notes
export function getNotesByFolder(folderId) {
  //filter notes that contain the specified folder
  const notesFromStorage = getAllNotes();

  return notesFromStorage.filter((note) => note.folderId === folderId);
}

export function getNotesByTag(tagName) {
  // filter notes that contain specificed tag
  const notesFromStorage = getAllNotes();

  return notesFromStorage.filter((note) => note.tags.includes(tagName));
}
// add note to localStorage
export function addNote(title, content, folderId, tags = []) {
  // create a new note
  const newNote = createNote(title, content, folderId, tags);
  // access all existing notes form localStorage
  const existingNotes = getAllNotes();
  existingNotes.push(newNote);

  saveNotes(existingNotes);

  return newNote;
}
// update an existing note
export function updateNote(noteId, updates) {
  // find note by Id ,update properties, save to Storage
  // update obj might contain:{title,content,tags etc}
  const notes = getAllNotes();

  const updatedNote = notes.map((note) => {
    if (note.id === noteId) {
      return {
        ...note,
        ...updates,
        updatedAt: new Date().toISOString(),
      };
    } else return note;
  });

  saveNotes(updatedNote);
}
// delete a note

export function deleteNote(noteId) {
  // Remove note from storage, return true if successfull
  const existingNotes = getAllNotes();
  const remianingNotes = existingNotes.filter((note) => note.id !== noteId);
  saveNotes(remianingNotes);
  return true;
}
// get all unique tags across all notes
export function getAllTags() {
  // return array of unique tag strings
  const existingNotes = getAllNotes();
  const alltags = existingNotes.flatMap((note) => note.tags);
  return [...new Set(alltags)];
}
