export const READ_LATER_KEY = 'READ_LATER_LIST';

export const getListFromLocalStorage = () => {
    const storedItems = localStorage.getItem(READ_LATER_KEY);
    return storedItems ? JSON.parse(storedItems) : [];
};

export const saveNewsToLocalStorage = (list) => {
    localStorage.setItem(READ_LATER_KEY, JSON.stringify(list));
};
