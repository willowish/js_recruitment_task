import { element } from '../../../../common/element/element';

export const sectionChip = (innerText) =>
    element('div', {
        props: { className: 'section', innerText },
    });
