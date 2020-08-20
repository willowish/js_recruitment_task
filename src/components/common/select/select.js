import { element } from '../../element/element';

const option = (value) =>
    element('option', {
        props: {
            value,
            innerText: value,
        },
    });

const optionsList = (list) => list.map(option);

export const selectComponent = (props, options) =>
    element('select', {
        props,
        children: optionsList(options),
    });
