import { EVENTS } from '../../events/events';
import { getNewsByWebUrl } from '../newsService/newsService';

export const READ_LATER_KEY = 'READ_LATER_LIST';

const getListFromLocalStorage = () => {
    const storedItems = localStorage.getItem(READ_LATER_KEY);
    return storedItems ? JSON.parse(storedItems) : [];
};

export const getReadLaterList = () => getListFromLocalStorage();

export const addNewsToReadLater = (newsWebUrl) => {
    const readLaterList = getListFromLocalStorage();
    if (readLaterList.some((n) => n.webUrl === newsWebUrl)) {
        return;
    }
    const news = getNewsByWebUrl(newsWebUrl);
    localStorage.setItem(
        READ_LATER_KEY,
        JSON.stringify([...readLaterList, news])
    );
    document.dispatchEvent(new Event(EVENTS.READ_LATER_LIST_CHANGED));
};

export const removeNewsFromReadLater = (newsWebUrl) => {
    const readLaterList = getListFromLocalStorage().filter(
        ({ webUrl }) => webUrl !== newsWebUrl
    );
    localStorage.setItem(READ_LATER_KEY, JSON.stringify(readLaterList));
    document.dispatchEvent(new Event(EVENTS.READ_LATER_LIST_CHANGED));
};
