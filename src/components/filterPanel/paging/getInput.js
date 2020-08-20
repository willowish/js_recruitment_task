import { element } from '../../common/element/element';

export const getInput = (onchange, pagingInfo) =>
    element('input', {
        props: {
            onchange,
            value: pagingInfo.page,
            type: 'number',
            max: pagingInfo.pages,
            min: 1,
            maxLength: pagingInfo.pages.toString().length,
            className: 'paging-input',
        },
    });
