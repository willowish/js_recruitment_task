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

const getDaysInMilliseconds = (daysRange) => daysRange * 24 * 60 * 60 * 1000;

export const getDateRange = (daysRange = 30) => {
    const maxDateTime = new Date(Date.now() - getDaysInMilliseconds(daysRange));

    return `from-date=${getFormattedDateRange(
        maxDateTime
    )}&to-date=${getFormattedDateRange(new Date())}`;
};
