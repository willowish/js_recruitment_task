import { element } from '../../common/element/element';
import { setSearch } from '../../../services/newsService';
import { debounce } from '../../../helpers/debounce';

export const searchInput = () => {
    const onkeyup = debounce(({ target: { value } }) => {
        setSearch(value);
    }, 400);

    return element('input', {
        props: {
            id: 'newsContentSearch',
            className: 'container filtersContainer',
            placeholder: 'Search...',
            autocomplete: 'off',
            onkeyup,
        },
    });
};
