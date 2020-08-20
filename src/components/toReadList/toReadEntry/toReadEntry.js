import { element } from '../../common/element/element';
import { title } from './title/title';
import { footer } from './footer/footer';

export const toReadEntry = ({ webTitle, sectionName, webUrl }) =>
    element('div', {
        props: { className: 'to-read-box shadow' },
        children: [title(webTitle), footer(sectionName, webUrl)],
    });
