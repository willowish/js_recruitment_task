import { element } from '../common/element/element';
import './toReadList.css';
import {
    getReadLaterList,
    removeNewsFromReadLater,
} from '../../services/readLaterService';

export const toReadList = () =>
    element('div', {
        props: { className: 'to-read-list' },
        children: getReadLaterList().map(toReadEntry),
    });

const toReadEntry = ({ webTitle, sectionName, webUrl }) =>
    element('div', {
        props: { className: 'to-read-box shadow' },
        children: [title(webTitle), footer(sectionName, webUrl)],
    });

const title = (innerText) =>
    element('div', { props: { className: 'title', innerText } });

const footer = (section, webUrl) =>
    element('div', {
        props: {
            className: 'footer',
        },
        children: [sectionChip(section), buttons(webUrl)],
    });

const sectionChip = (innerText) =>
    element('div', { props: { className: 'section', innerText } });

const buttons = (webUrl) =>
    element('div', {
        props: { className: 'buttons' },
        children: [
            element('a', {
                props: {
                    className: 'icon',
                    onclick: () => {
                        removeNewsFromReadLater(webUrl);
                    },
                },
                children: [element('i', { props: { className: 'fas fa-trash-alt' } })],
            }),
            element('a', {
                props: { className: 'icon', href: webUrl },
                children: [
                    element('i', { props: { className: 'fas fa-external-link-alt ' } }),
                ],
            }),
        ],
    });
