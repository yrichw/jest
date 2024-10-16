// src/utils/storage.ts
const KEY_NAME = "my-app-";

const set = (key: string, value: string) => {
  localStorage.setItem(KEY_NAME + key, value);
};

const get = (key: string) => {
  return localStorage.getItem(KEY_NAME + key);
};

const deleteKey = (key: string) => {
  localStorage.removeItem(KEY_NAME + key)
  return 
};

const storage = {
  get,
  set,
  deleteKey,
};

export default storage;