import { saveFolders, loadFolders } from "./storage.js";

// Generate unique Id for Folders
export function generateFolderId() {
  return `folder_${
    Date.now().toString() + Math.random().toString(36).substring(2)
  }`;
}

//create a new folder object
export function createFolder(name) {
  const folderObj = {
    id: generateFolderId(),
    name: name,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  return folderObj;
}

//get all folder from local storage
export function getAllFolders() {
  return loadFolders();
}

//add a new folder
export function addFolder(name) {
  //create new folder
  if (folderNameExists(name)) {
    throw new Error(`folder "${name}" already exists`);
  }
  const newFolder = createFolder(name);
  // load existing folders from local storage
  const existingFolders = getAllFolders();
  existingFolders.push(newFolder);
  saveFolders(existingFolders);
  return newFolder;
}

//update a new folder
export function updateFolder(folderId, newName) {
  const existingFolders = getAllFolders();
  const updatedFolder = existingFolders.map((folder) => {
    if (folder.id === folderId) {
      return {
        ...folder,
        name: newName,
        updatedAt: new Date().toISOString(),
      };
    } else return folder;
  });
  saveFolders(updatedFolder);
}

// Delete folder
export function deleteFolder(folderId) {
  const existingFolders = getAllFolders();
  const updatedFoldersList = existingFolders.filter(
    (folder) => folder.id !== folderId
  );
  saveFolders(updatedFoldersList);
  return true;
}

//get folder by Id
export function getFolderById(folderId) {
  const existingFolders = getAllFolders();
  return existingFolders.find((folder) => folder.id === folderId);
}

export function folderNameExists(name) {
  const folderList = getAllFolders();
  const folder = folderList.filter((folder) => folder.name === name);
  if (folder.length === 0) {
    return false;
  } else {
    return true;
  }
}
