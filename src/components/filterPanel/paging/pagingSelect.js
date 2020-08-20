import {
    getNewsPagingInfo,
    setSelectedPage,
} from '../../../services/newsService';
import { selectComponent } from '../../common/select/select';

export const pagingSelect = () => {
    const pagingInfo = getNewsPagingInfo();
    const onchange = ({ target: { value } }) => {
        setSelectedPage(value);
    };

    return selectComponent(
        {
            id: 'activePageSelect',
            onchange,
            disabled: !pagingInfo.pages,
        },
        Array(pagingInfo.pages)
            .fill()
            .map((_, i) => i + 1)
    );
};
