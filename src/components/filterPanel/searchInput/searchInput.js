import { element } from '../../element/element';
import { setSearch } from '../../../services/newsService';

export const searchInput = () => {
    const onKeyUp = ({ target: { value } }) => {
        setSearch(value);
    };

    return element('input', {
        props: {
            id: 'newsContentSearch',
            className: 'container filtersContainer',
            onkeyup: onKeyUp,
        },
    });
};
