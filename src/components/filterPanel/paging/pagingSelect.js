import {
    getNewsPagingInfo,
    setSelectedPage,
} from '../../../services/newsService';
import { element } from '../../common/element/element';
import { buttonWithIcon } from '../../common/buttonWithIcon/buttonWithIcon';
import './pagingPanel.css';
import { getInput } from './getInput';

export const pagingSelect = () => {
    const pagingInfo = getNewsPagingInfo();
    const onchange = ({ target: { value } }) => {
        setSelectedPage(value);
    };

    if (pagingInfo.total === 0) {
        return element('div', { props: { id: 'activePageSelect' } });
    }

    return element('div', {
        props: { className: 'paging-panel-root', id: 'activePageSelect' },
        children: [
            element('div', { props: { innerText: 'Page' } }),
            element('div', {
                props: { className: 'paging-panel-box' },
                children: [
                    buttonWithIcon(
                        () => pagingInfo.page > 1 && setSelectedPage(pagingInfo.page - 1),
                        'fas fa-less-than',
                        'control-btn'
                    ),
                    getInput(onchange, pagingInfo),
                    buttonWithIcon(
                        () => setSelectedPage(pagingInfo.page + 1),
                        'fas fa-greater-than',
                        'control-btn'
                    ),
                ],
            }),
        ],
    });
};
