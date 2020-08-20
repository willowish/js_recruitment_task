import './styles/main.css';
import { newsList } from './components/newsList/newsList';
import { loadInitialNews } from './services/newsService';
import { searchInput } from './components/filterPanel/searchInput/searchInput';
import { EVENTS } from './services/events/events';
import { pagingSelect } from './components/filterPanel/paging/pagingSelect';
import { sectionSelector } from './components/filterPanel/sectionSelector/sectionSelector';

const newsListID = '#newsListColumn';
const searchColumnId = '#searchColumn';
const pagingSelector = '#pageSelectBox';

const onListChanged = () => {
    document.querySelector(newsListID).firstChild.replaceWith(newsList());
    document.querySelector('#activePageSelect').replaceWith(pagingSelect());
};

window.onload = async () => {
    await loadInitialNews();
    document.querySelector(newsListID).append(newsList());
    document.querySelector(searchColumnId).appendChild(searchInput());
    document.querySelector(pagingSelector).appendChild(pagingSelect());
    document.querySelector('#sectionSelectBox').appendChild(sectionSelector());
    document.addEventListener(EVENTS.NEWS_LIST_CHANGED, onListChanged);
};
