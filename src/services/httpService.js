const BASE_URL = 'https://content.guardianapis.com';
const KEY = '98c40db7-17e6-4e18-9be6-bdff85c7bcb6';

export const performGet = async (url) => {
    const response = await fetch(`${BASE_URL}/${url}&api-key=${KEY}`, {
        headers: { 'content-type': 'application-json' },
        mode: 'cors',
    });
    return await response.json();
};
