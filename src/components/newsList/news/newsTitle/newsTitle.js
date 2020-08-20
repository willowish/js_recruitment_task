import { element } from '../../../common/element/element';

export const newsTitle = (title) => {
    return element('header', {
        props: { className: 'news-title' },
        children: [element('h3', { props: { innerText: title } })],
    });
};
