export function debounce(callback, wait) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => callback.apply({}, args), wait);
    };
}
