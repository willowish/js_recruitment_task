import './styles/main.css';
import { newsList } from './components/newsList/newsList';
import { getNews } from './services/newsService';

window.onload = async () => {
    const news = await getNews();
    document.querySelector('#newsListColumn').append(newsList(news));
};
