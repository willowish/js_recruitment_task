import { element } from '../../../../common/element/element';
import { removeNewsFromReadLater } from '../../../../../services/readLaterService';

export const buttons = (webUrl) =>
    element('div', {
        props: { className: 'buttons' },
        children: [
            element('a', {
                props: {
                    className: 'icon',
                    onclick: () => removeNewsFromReadLater(webUrl),
                },
                children: [element('i', { props: { className: 'fas fa-trash-alt' } })],
            }),
            element('a', {
                props: {
                    className: 'icon',
                    href: webUrl,
                },
                children: [
                    element('i', { props: { className: 'fas fa-external-link-alt' } }),
                ],
            }),
        ],
    });
