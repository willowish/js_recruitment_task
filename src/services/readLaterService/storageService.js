import {
    getListFromLocalStorage,
    saveNewsToLocalStorage,
} from './localStorageService';

export const getReadLaterListFromStorage = () => getListFromLocalStorage();

export const saveNewsToReadLater = (list) => {
    saveNewsToLocalStorage(list);
};
