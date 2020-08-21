import { EVENTS } from '../../events/events';
import { getNewsByWebUrl } from '../newsService/newsService';
import {
    getReadLaterListFromStorage,
    saveNewsToReadLater,
} from './storageService';

export const getReadLaterList = () => getReadLaterListFromStorage();

export const addNewsToReadLater = (newsWebUrl) => {
    const readLaterList = getReadLaterListFromStorage();
    if (readLaterList.some((n) => n.webUrl === newsWebUrl)) {
        return;
    }
    const news = getNewsByWebUrl(newsWebUrl);
    saveNewsToReadLater(readLaterList.concat(news));
    document.dispatchEvent(new Event(EVENTS.READ_LATER_LIST_CHANGED));
};

export const removeNewsFromReadLater = (newsWebUrl) => {
    const readLaterList = getReadLaterListFromStorage().filter(
        ({ webUrl }) => webUrl !== newsWebUrl
    );
    saveNewsToReadLater(readLaterList);
    document.dispatchEvent(new Event(EVENTS.READ_LATER_LIST_CHANGED));
};
