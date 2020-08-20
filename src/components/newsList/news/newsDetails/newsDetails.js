import { element } from '../../../common/element/element';

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
