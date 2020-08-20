import { element } from '../element/element';

export const buttonWithIcon = (onclick, iconClass, className = '') =>
    element('a', {
        props: {
            className: `${className} icon`,
            onclick,
        },
        children: [element('i', { props: { className: iconClass } })],
    });
