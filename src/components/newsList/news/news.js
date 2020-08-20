import { element } from '../../element/element';

export const news = ({ webTitle, webPublicationDate, webUrl, sectionName }) => {
    return element('li', {
        children: [
            element('article', {
                props: { className: 'news' },
                children: [
                    newsTitle(webTitle),
                    newsDetails(webPublicationDate, sectionName),
                    newsActions(webUrl),
                ],
            }),
        ],
    });
};

export const newsTitle = (title) => {
    return element('header', {
        children: [element('h3', { props: { innerText: title } })],
    });
};

const getListItem = (boldText, sectionName) =>
    element('li', {
        children: [
            element('strong', { props: { innerText: boldText } }),
            element('span', { props: { innerText: sectionName } }),
        ],
    });

export const newsDetails = (webPublicationDate, sectionName) => {
    return element('section', {
        props: { className: 'newsDetails' },
        children: [
            element('ul', {
                children: [
                    getListItem('Section Name: ', sectionName),
                    getListItem('Publication Date:', webPublicationDate),
                ],
            }),
        ],
    });
};

export const newsActions = (webUrl) => {
    return element('section', {
        props: { className: 'newsActions' },
        children: [
            element('a', {
                props: { href: webUrl, className: 'button', innerText: 'Full article' },
            }),
            element('button', {
                props: { className: 'button button-outline', innerText: 'Read Later' },
            }),
        ],
    });
};
