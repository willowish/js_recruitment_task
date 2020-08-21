import { getUrlForInitialLoad, getUrlWithFilters } from './urlBuilder';
const DEFAULT_URL = 'search?page=1&from-date=2020-01-16&to-date=2020-08-22';

describe('', () => {
    beforeEach(() => {
        jest
        // eslint-disable-next-line no-undef
            .spyOn(global.Date, 'now')
            .mockImplementation(() => Date.parse('2020-02-14'));
    });

    test('should return url with date range of "last" 30 days from mocked data', () => {
    // given
    // when
        const url = getUrlForInitialLoad();
        // then
        expect(url).toStrictEqual(DEFAULT_URL);
    });

    test('should return default url when filters are emptay', () => {
    // given
    // when
        const urlWithFilters = getUrlWithFilters({});
        // then
        expect(urlWithFilters).toStrictEqual(DEFAULT_URL);
    });

    test('should return query with searched text when one is provided', () => {
    // given
        const searchText = 'hello there!';
        // when
        const urlWithFilters = getUrlWithFilters({ searchText });
        // then
        expect(urlWithFilters).toStrictEqual(`search?page=1&q=${searchText}`);
    });

    test('should return query with section param when one is provided', () => {
    // given
        const section = 'hello there!';
        // when
        const urlWithFilters = getUrlWithFilters({ section });
        // then
        expect(urlWithFilters).toStrictEqual(`search?page=1&section=${section}`);
    });

    test('should return query with all filters combined when provided', () => {
    // given
        const searchText = 'hello there!';
        const section = 'general Kenobi!';
        const page = 666;
        // when
        const urlWithFilters = getUrlWithFilters({ section, searchText, page });
        // then
        expect(urlWithFilters).toStrictEqual(
            `search?page=${page}&section=${section}&q=${searchText}`
        );
    });
});
