import React, {Component} from 'react';
import Book from '../../components/Book';
import Page from '../../components/Page';

import OpenLibrary from './../../services/OpenLibrary';

class MyLibrary extends Component {
    state = {
        books: [],
    };

    constructor(props) {
        super(props);

        OpenLibrary.getBookList('science_fiction').then(({data}) => {
            this.setState({books: data.works});
        });
    }

    render() {
        const {books} = this.state;

        return (
            <Page>
                {books.map((item, index) => (
                    <Book
                        item={item}
                        cover={`http://covers.openlibrary.org/b/id/${item.cover_id}-M.jpg`}
                        index={index}
                    />
                ))}
            </Page>
        );
    }
}

export default MyLibrary;
