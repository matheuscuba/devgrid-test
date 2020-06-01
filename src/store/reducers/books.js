import qs from 'qs';

export const GET_BOOKS = 'books/GET_BOOKS';
export const GET_BOOKS_SUCCESS = 'books/GET_BOOKS_SUCCESS';
export const GET_BOOKS_FAIL = 'books/GET_BOOKS_FAIL';

export const GET_BOOKS_SUBJECT = 'books/get-books-subject';
export const GET_BOOKS_SUBJECT_FAIL = 'books/get-books-subject-fail';

export const UPDATE_BOOKS = 'books/UPDATE_BOOKS';

const initialState = {
    subject: [],
    data: [],
    loading: false,
    loadingMessage: '',
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_BOOKS_SUBJECT:
            return {
                ...state,
                loading: true,
                loadingMessage: 'Searching books from subject...',
            };
        case GET_BOOKS:
            return {
                ...state,
                loading: true,
                loadingMessage: 'Getting books details...',
            };
        case GET_BOOKS_SUCCESS:
            return {
                ...state,
                data: Object.values(action.payload.data),
                loading: false,
                loadingMessage: '',
            };
        case UPDATE_BOOKS:
            console.log('action.payload.books', action.payload.books);
            return {
                ...state,
                data: action.payload.books,
            };
        default:
            return state;
    }
}

export function getBooksSubject(subject) {
    let params = {
        limit: 60,
        ebooks: true,
        details: true,
        offset: 60,
    };

    return {
        type: GET_BOOKS_SUBJECT,
        payload: {
            request: {
                url: `subjects/${subject}.json?${qs.stringify(params)}`,
            },
        },
    };
}

export function getBooksDetails(keys) {
    let params = {
        format: 'json',
        details: true,
        bibkeys: keys,
    };

    return {
        type: GET_BOOKS,
        payload: {
            request: {
                url: `api/books?${qs.stringify(params)}`,
            },
        },
    };
}

export function updateBooks(books) {
    return {
        type: UPDATE_BOOKS,
        payload: {
            books,
        },
    };
}
