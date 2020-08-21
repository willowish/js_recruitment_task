import { element } from '../../../../common/element/element';
import { removeNewsFromReadLater } from '../../../../../services/readLaterService/readLaterService';
import { buttonWithIcon } from '../../../../common/buttonWithIcon/buttonWithIcon';

export const buttons = (webUrl) =>
    element('div', {
        props: { className: 'buttons' },
        children: [
            buttonWithIcon(() => removeNewsFromReadLater(webUrl), 'fas fa-trash-alt'),
            element('a', {
                props: {
                    className: 'icon',
                    href: webUrl,
                    target: '_blank',
                },
                children: [
                    element('i', { props: { className: 'fas fa-external-link-alt' } }),
                ],
            }),
        ],
    });
