import { element } from '../../../common/element/element';
import { sectionChip } from './sectionChip/sectionChip';
import { buttons } from './buttons/buttons';

export const footer = (section, webUrl) =>
    element('div', {
        props: {
            className: 'footer',
        },
        children: [sectionChip(section), buttons(webUrl)],
    });
