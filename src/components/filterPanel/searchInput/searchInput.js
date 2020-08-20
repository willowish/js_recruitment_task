import { element } from '../../common/element/element';
import { setSearch } from '../../../services/newsService';

export const searchInput = () => {
    const onkeyup = ({ target: { value } }) => {
        setSearch(value);
    };

    return element('input', {
        props: {
            id: 'newsContentSearch',
            className: 'container filtersContainer',
            onkeyup,
        },
    });
};
