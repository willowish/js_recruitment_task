import { element } from '../common/element/element';
import { newsEntry } from './news/newsEntry';
import { getNewsList } from '../../services/newsService/newsService';

const getList = (newsList) => newsList.map((n) => newsEntry(n));

export const newsList = () =>
    element('div', {
        props: { class: 'newsList' },
        children: getList(getNewsList()),
    });
