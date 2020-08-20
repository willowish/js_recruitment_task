import { EVENTS } from './events/events';
import { getNewsByWebUrl } from './newsService';

const READ_LATER_KEY = 'READ_LATER_LIST';

let readLaterList = null;

const getListFromLocalStorage = () => {
    const storedItems = localStorage.getItem(READ_LATER_KEY);
    return storedItems ? JSON.parse(storedItems) : [];
};

(() => {
    readLaterList = getListFromLocalStorage();
})();

export const getReadLaterList = () => readLaterList;

export const addNewsToReadLater = (newsWebUrl) => {
    if (readLaterList.some((n) => n.webUrl === newsWebUrl)) {
        return;
    }
    const news = getNewsByWebUrl(newsWebUrl);
    readLaterList.push(news);
    localStorage.setItem(
        READ_LATER_KEY,
        JSON.stringify([...getListFromLocalStorage(), news])
    );
    document.dispatchEvent(new Event(EVENTS.READ_LATER_LIST_CHANGED));
};

export const removeNewsFromReadLater = (newsWebUrl) => {
    readLaterList = readLaterList.filter(({ webUrl }) => webUrl !== newsWebUrl);
    localStorage.setItem(READ_LATER_KEY, JSON.stringify(readLaterList));
    document.dispatchEvent(new Event(EVENTS.READ_LATER_LIST_CHANGED));
};
