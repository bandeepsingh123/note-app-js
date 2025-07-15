// Storage utilities for localStorage management

// Save notes to localStorage
export function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

export function loadNotes() {
  // return empty array if no notes exist
  try {
    const data = localStorage.getItem("notes");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("error loading notes:", error);
    return [];
  }
}

// save folders to localStorage
export function saveFolders(folders) {
  localStorage.setItem("folders", JSON.stringify(folders));
}

// load folders from loacalStorage
export function loadFolders() {
  // return empty array if no folders exist

  try {
    const folderData = localStorage.getItem("folders");
    return folderData ? JSON.parse(folderData) : [];
  } catch (error) {
    console.error("error loading folders:", error);
    return [];
  }
}

//clear all app data (useful for testing)
export function clearAllData() {
  localStorage.removeItem("notes");
  localStorage.removeItem("folders");
}
