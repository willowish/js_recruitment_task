import { performGet } from './httpService';

const getFormattedPartOfDate = (date) => {
    const partOfDate = String(date + 1);
    if (partOfDate.length === 1) {
        return `0${partOfDate}`;
    }

    return partOfDate;
};

const getFormattedDateRange = (date, separator = '-') => {
    const year = String(date.getFullYear());
    const month = getFormattedPartOfDate(date.getMonth());
    const day = getFormattedPartOfDate(date.getDate());

    return [year, month, day].join(separator);
};

const getDateRange = () => {
    const days = 30;
    const maxDateTime = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

    return `from-date=${getFormattedDateRange(
        maxDateTime
    )}&to-date=${getFormattedDateRange(new Date())}`;
};

export const getNews = async (page = 1) => {
    const dateRange = getDateRange();
    const url = `search?page=${page}&${dateRange}`;
    const {
        response: { results },
    } = await performGet(url);

    return await results;
};
