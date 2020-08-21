import { selectComponent } from '../../common/select/select';
import { setSelectedSection } from '../../../services/newsService/newsService';

const sections = ['sport', 'books', 'business', 'culture'];

export const sectionSelector = () => {
    const onchange = ({ target: { value } }) => {
        setSelectedSection(value);
    };

    return selectComponent(
        {
            id: 'sectionSelect',
            onchange,
        },
        sections
    );
};
