import { element } from '../element/element';

export const searchInput = () => {
    return element('section', {
        props: { className: 'container filtersContainer' },
        children: [
            element('input', {
                props: { type: 'search', placeholder: 'News content search' },
            }),
        ],
    });
};
