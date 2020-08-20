import { element } from '../../common/element/element';
import { newsTitle } from './newsTitle/newsTitle';
import { newsDetails } from './newsDetails/newsDetails';
import { newsActions } from './newsActions/newsActions';

export const newsEntry = ({
    webTitle,
    webPublicationDate,
    webUrl,
    sectionName,
}) => {
    return element('div', {
        children: [
            element('article', {
                props: { className: 'news shadow' },
                children: [
                    newsTitle(webTitle),
                    newsDetails(webPublicationDate, sectionName),
                    newsActions(webUrl),
                ],
            }),
        ],
    });
};
