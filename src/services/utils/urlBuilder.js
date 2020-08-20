import { getDateRangeFromGivenDaysToNow } from '../dateRangeGenerator';

export const getUrlWithFilters = ({ section, searchText, page }) => {
    const sectionQuery = section ? `&section=${section}` : '';
    const searchQuery = searchText ? `&q=${searchText}` : '';
    const dateRange =
    !sectionQuery.length && !searchQuery.length
        ? getDateRangeFromGivenDaysToNow(30)
        : '';

    return `search?page=${page}${sectionQuery}${searchQuery}${dateRange}`;
};

export const getUrlForInitialLoad = () => {
    const dateRange = getDateRangeFromGivenDaysToNow(30);

    return `search?page=${1}${dateRange}`;
};
