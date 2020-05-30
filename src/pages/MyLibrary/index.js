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

        OpenLibrary.getBookList().then(({data}) => {
            this.setState({books: data.entries});
        });
    }

    render() {
        const {books} = this.state;

        return (
            <Page>
                {books.map((item, index) => (
                    <Book item={item} index={index} />
                ))}
            </Page>
        );
    }
}

export default MyLibrary;
