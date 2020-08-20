import { element } from '../../../common/element/element';

export const newsTitle = (title) => {
    return element('header', {
        children: [element('h3', { props: { innerText: title } })],
    });
};
