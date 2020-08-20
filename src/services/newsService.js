import { performGet } from './httpService';
import { EVENTS } from '../events/events';
import { getUrlForInitialLoad, getUrlWithFilters } from './utils/urlBuilder';

const filters = {
    searchText: '',
    section: null,
    page: 1,
};

const newsListPageable = {
    list: null,
    pages: 1,
    total: 0,
};

export const setSearch = (searchText) => {
    filters.searchText = searchText;
    applyFilters();
};

export const setSelectedPage = (page) => {
    filters.page = Math.max(Math.min(page, newsListPageable.pages), 1);
    applyFilters();
};

export const setSelectedSection = (section) => {
    filters.section = section;
    applyFilters();
};

const applyFilters = async () => {
    const {
        response: { results, pages, total },
    } = await performGet(getUrlWithFilters(filters));

    newsListPageable.list = results;
    newsListPageable.pages = pages;
    newsListPageable.total = total;
    document.dispatchEvent(new Event(EVENTS.NEWS_LIST_CHANGED));
};

export const loadInitialNews = async () => {
    const {
        response: { results, currentPage, pages, total },
    } = await performGet(getUrlForInitialLoad());

    newsListPageable.list = results;
    newsListPageable.pages = pages;
    newsListPageable.total = total;
    filters.page = currentPage;
};

export const getNewsList = () => newsListPageable?.list;

export const getNewsPagingInfo = () => ({
    page: filters.page,
    pages: newsListPageable.pages,
    total: newsListPageable.total,
});

export const getNewsByWebUrl = (url) =>
    newsListPageable.list.find((n) => n.webUrl === url);
