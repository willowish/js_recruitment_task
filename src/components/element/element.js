export const element = (tagName, { props = {}, children = [] }) => {
    const element = document.createElement(tagName);

    for (let key in props) {
        element[key] = props[key];
    }

    children.forEach((child) => {
        element.appendChild(child);
    });

    return element;
};
