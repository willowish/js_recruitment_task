import { element } from '../element/element';
import { news } from './news/news';
import { getNewsList } from '../../services/newsService';

const getList = (newsList) => newsList.map((n) => news(n));

export const newsList = () =>
    element('ul', {
        props: { class: 'newsList' },
        children: getList(getNewsList()),
    });
