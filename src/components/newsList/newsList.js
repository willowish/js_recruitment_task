import { element } from '../element/element';
import { news } from './news/news';

const getList = (newsList) => newsList.map((n) => news(n));

export const newsList = (news) => {
    const list = getList(news);
    return element('ul', { props: { class: 'newsList' }, children: list });
};
