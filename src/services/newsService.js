import { performGet } from './httpService';
import { EVENTS } from './events/events';
import { getUrlForInitialLoad, getUrlWithFilters } from './utils/urlBuilder';

const filters = {
    searchText: '',
    section: null,
};

const newsListPageable = {
    list: null,
    page: 1,
    pages: 1,
};

export const setSearch = (searchText) => {
    filters.searchText = searchText;
    applyFilters();
};

export const setSelectedPage = (page) => {
    filters.page = page;
    applyFilters();
};

export const setSelectedSection = (section) => {
    filters.section = section;
    applyFilters();
};

const applyFilters = async () => {
    const {
        response: { results, pages },
    } = await performGet(getUrlWithFilters(filters));

    newsListPageable.list = results;
    newsListPageable.pages = pages;
    document.dispatchEvent(new Event(EVENTS.NEWS_LIST_CHANGED));
};

export const loadInitialNews = async () => {
    const {
        response: { results, currentPage, pages },
    } = await performGet(getUrlForInitialLoad());

    newsListPageable.list = results;
    newsListPageable.pages = pages;
    filters.page = currentPage;
};

export const getNewsList = () => newsListPageable?.list;

export const getNewsPagingInfo = () => ({
    page: filters.page,
    pages: newsListPageable.pages,
});

export const getNewsByWebUrl = (url) =>
    newsListPageable.list.find((n) => n.webUrl === url);
