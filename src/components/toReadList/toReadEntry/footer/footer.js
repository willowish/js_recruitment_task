import { element } from '../../../common/element/element';
import { sectionChip } from '../title/sectionChip/sectionChip';
import { buttons } from '../title/buttons/buttons';

export const footer = (section, webUrl) =>
    element('div', {
        props: {
            className: 'footer',
        },
        children: [sectionChip(section), buttons(webUrl)],
    });
