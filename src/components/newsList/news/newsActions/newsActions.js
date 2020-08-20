import { addNewsToReadLater } from '../../../../services/readLaterService';
import { element } from '../../../common/element/element';

export const newsActions = (webUrl) => {
    const onclick = () => {
        addNewsToReadLater(webUrl);
    };

    return element('section', {
        props: { className: 'newsActions' },
        children: [
            element('a', {
                props: { href: webUrl, className: 'button', innerText: 'Full article' },
            }),
            element('button', {
                props: {
                    className: 'button button-outline',
                    innerText: 'Read Later',
                    onclick,
                },
            }),
        ],
    });
};
