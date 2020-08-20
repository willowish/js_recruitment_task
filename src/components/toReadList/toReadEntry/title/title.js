import { element } from '../../../common/element/element';

export const title = (innerText) =>
    element('div', {
        props: { className: 'title', innerText },
    });
