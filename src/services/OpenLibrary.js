import axios from 'axios';
const OpenLibraryAPI = axios.create({
    baseURL: 'https://openlibrary.org/',
    responseEncoding: 'utf8',
    responseType: 'json',
});

const OpenLibrary = {};

OpenLibrary.getBookList = () => {
    return OpenLibraryAPI.get('people/violet_frost/lists/OL127353L/seeds.json');
};

export default OpenLibrary;
