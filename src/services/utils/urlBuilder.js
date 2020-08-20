import { getDateRangeFromGivenDaysToNow } from '../dateRangeGenerator';

export const getUrlWithFilters = ({ section, searchText, page }) => {
    const sectionQuery = section ? `&section=${section}` : '';
    const searchQuery = searchText ? `&q=${searchText}` : '';

    return `search?page=${page}${sectionQuery}${searchQuery}`;
};

export const getUrlForInitialLoad = () => {
    const dateRange = getDateRangeFromGivenDaysToNow(30);

    return `search?page=${1}&${dateRange}`;
};
