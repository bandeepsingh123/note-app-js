// Note object Structure
const noteExample = {
  id: "note_6646464411646449477496_8958", // unique id
  title: "My study note", // Note Title
  content: "Functions are first class citzens", // Note content
  createdAt: "2025-07-14T11:45:00.456Z", //ISO timestamp
  updatedAt: "2025-07-14T11:45:00.456Z", // last modified
  folderId: "folder_1721818100000_789", // which folder it belongs to
  tags: ["javascript", "programming", "study"], // array of tag strings
  trashed: false, // soft deletation in trash bin
  favorite: false, // flag for user marked favorites
};

// Folder Object Structure
const folderExample = {
  id: "folder_1721818100000_789", // unique id
  name: "my college notes", // folder display name
  createdAt: "2025-07-14T09:00:00.000Z", // when folder was created
  updatedAt: "2025-09-14T09:00:00.000Z", // last modified
  parentFolderId: "older_1721818100000_229", // for nested folder
  trashed: false, // flag fro soft deleted folder
};

//unique id generation
const id = Date.now().toString() + Math.random().toString(36).substring(2);
console.log(id); // "1720874736658x7xjuy"

// local storage structure
// multiple keys
localStorage.setItem("notes", JSON.stringify([note1, note2, ...]));
localStorage.setItem("folders", JSON.stringify([folder1, folder2, ...]));
