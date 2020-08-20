import { element } from '../common/element/element';
import './toReadList.css';
import { getReadLaterList } from '../../services/readLaterService';
import { toReadEntry } from './toReadEntry/toReadEntry';

export const toReadList = () =>
    element('div', {
        props: { className: 'to-read-list' },
        children: getReadLaterList().map(toReadEntry),
    });
