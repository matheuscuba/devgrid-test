import axios from 'axios';
import qs from 'qs';

const OpenLibraryAPI = axios.create({
    baseURL: 'https://openlibrary.org/',
    responseEncoding: 'utf8',
    responseType: 'json',
});

const OpenLibrary = {};

OpenLibrary.getBookList = (category = 'fiction') => {
    let params = {
        limit: 30,
    };

    params = qs.stringify(params);

    return OpenLibraryAPI.get(`subjects/${category}.json?${params}`);
};

export default OpenLibrary;
