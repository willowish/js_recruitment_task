import { performGet } from './httpService';
import { getDateRange } from './dateRangeGenerator';
import { EVENTS } from './events/events';

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
    performFiltering();
};

export const setSelectedPage = (page) => {
    newsListPageable.page = page;
    performFiltering();
};

export const setSelectedSection = (section) => {
    filters.section = section;
    performFiltering();
};

const performFiltering = async () => {
    const sectionQuery = filters.section ? `&section=${filters.section}` : '';
    const searchQuery = filters.searchText ? `&q=${filters.searchText}` : '';
    const url = `search?page=${newsListPageable.page}${sectionQuery}${searchQuery}`;
    const {
        response: { results, pages },
    } = await performGet(url);

    newsListPageable.list = results;
    newsListPageable.pages = pages;
    document.dispatchEvent(new Event(EVENTS.NEWS_LIST_CHANGED));
};

export const loadInitialNews = async () => {
    const dateRange = getDateRange();
    const url = `search?page=${1}&${dateRange}`;
    const {
        response: { results, currentPage, pages },
    } = await performGet(url);

    newsListPageable.list = results;
    newsListPageable.page = currentPage;
    newsListPageable.pages = pages;
};

export const getNewsList = () => newsListPageable?.list;
export const getNewsPagingInfo = () => ({
    page: newsListPageable.page,
    pages: newsListPageable.pages,
});
