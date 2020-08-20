import './styles/main.css';
import '@fortawesome/fontawesome-free/js/all';
import { newsList } from './components/newsList/newsList';
import { loadInitialNews } from './services/newsService';
import { searchInput } from './components/filterPanel/searchInput/searchInput';
import { EVENTS } from './events/events';
import { pagingSelect } from './components/filterPanel/paging/pagingSelect';
import { sectionSelector } from './components/filterPanel/sectionSelector/sectionSelector';
import { toReadList } from './components/toReadList/toReadList';

const newsListID = '#newsListColumn';
const searchColumnId = '#searchColumn';
const pagingSelector = '#pageSelectBox';
const readLaterSelector = '#readLaterList';

const onListChanged = () => {
    document.querySelector(newsListID).firstChild.replaceWith(newsList());
    document.querySelector('#activePageSelect').replaceWith(pagingSelect());
};

const onReadLaterChanged = () => {
    document
        .querySelector(readLaterSelector)
        .firstChild.replaceWith(toReadList());
};

const render = () => {
    document.querySelector(newsListID).append(newsList());
    document.querySelector(searchColumnId).appendChild(searchInput());
    document.querySelector(pagingSelector).appendChild(pagingSelect());
    document.querySelector('#sectionSelectBox').appendChild(sectionSelector());
    document.querySelector(readLaterSelector).appendChild(toReadList());
};

const addCustomEventListeners = () => {
    document.addEventListener(EVENTS.NEWS_LIST_CHANGED, onListChanged);
    document.addEventListener(EVENTS.READ_LATER_LIST_CHANGED, onReadLaterChanged);
};

window.onload = async () => {
    await loadInitialNews();
    render();
    addCustomEventListeners();
};
