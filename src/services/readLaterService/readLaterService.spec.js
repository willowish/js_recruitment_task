jest.mock('../newsService/newsService');

import {
    addNewsToReadLater,
    getReadLaterList,
    READ_LATER_KEY,
    removeNewsFromReadLater,
} from './readLaterService';
import { list } from '../../mocks/listOfNews';
import { getNewsByWebUrl } from '../newsService/newsService';
import { news } from '../../mocks/singleNews';

describe('read later service tests', () => {
    beforeEach(() => {
        localStorage.setItem(READ_LATER_KEY, JSON.stringify(list));
    });

    afterEach(() => {
        localStorage.clear();
    });

    test('should load items from localstorage and return them', () => {
    // given
    // when
        const readLaterList = getReadLaterList();
        // then
        expect(readLaterList).toStrictEqual(list);
    });

    test('should remove news from read later list', () => {
    // given
    // when
        removeNewsFromReadLater(list[0].webUrl);
        // then
        expect(getReadLaterList()).toStrictEqual([list[1]]);
    });

    test('should news to read later list', () => {
    // given
        getNewsByWebUrl.mockImplementation(() => news);
        // when
        addNewsToReadLater(news.webUrl);
        // then
        expect(getReadLaterList()).toStrictEqual([...list, news]);
    });
});
