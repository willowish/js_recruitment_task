import { element } from '../../../../common/element/element';
import { removeNewsFromReadLater } from '../../../../../services/readLaterService';
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
                },
                children: [
                    element('i', { props: { className: 'fas fa-external-link-alt' } }),
                ],
            }),
        ],
    });
