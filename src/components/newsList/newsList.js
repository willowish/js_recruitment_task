import { element } from '../common/element/element';
import { news } from './news/news';
import { getNewsList } from '../../services/newsService';

const getList = (newsList) => newsList.map((n) => news(n));

export const newsList = () =>
    element('div', {
        props: { class: 'newsList' },
        children: getList(getNewsList()),
    });
