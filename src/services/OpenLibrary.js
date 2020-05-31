import axios from 'axios';
import qs from 'qs';

const OpenLibraryAPI = axios.create({
    baseURL: 'https://openlibrary.org/',
    responseEncoding: 'utf8',
    responseType: 'json',
});

const OpenLibrary = {};

OpenLibrary.getBookList = async (category = 'science_fiction') => {
    var params = {
        limit: 60,
        ebooks: true,
        details: true,
        offset: 60,
    };

    params = qs.stringify(params);

    let {data} = await OpenLibraryAPI.get(
        `subjects/${category}.json?${params}`,
    );

    let isbn = data.works
        .filter((item) => item.availability?.isbn)
        .map((item) => item.availability.isbn);

    let olid = data.works
        .filter((item) => !item.availability?.isbn)
        .map((item) => item.key.replace('/works/', ''));

    params = {
        format: 'json',
        details: true,
        bibkeys: `ISBN:${isbn.join()},OLID:${olid.join()}`,
    };

    return OpenLibraryAPI.get(`api/books?${qs.stringify(params)}`);
};

export default OpenLibrary;
