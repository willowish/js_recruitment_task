import { getDateRangeFromGivenDaysToNow } from '../dateRangeGenerator';

export const getUrlWithFilters = ({ section, searchText, page }) => {
    const sectionQuery = section ? `&section=${section}` : '';
    const searchQuery = searchText ? `&q=${searchText}` : '';
    const pageQuery = page ? `page=${page}` : 'page=1';
    const dateRange =
    !sectionQuery.length && !searchQuery.length
        ? getDateRangeFromGivenDaysToNow(30)
        : '';

    return `search?${pageQuery}${sectionQuery}${searchQuery}${dateRange}`;
};

export const getUrlForInitialLoad = () => {
    const dateRange = getDateRangeFromGivenDaysToNow(30);

    return `search?page=${1}${dateRange}`;
};
