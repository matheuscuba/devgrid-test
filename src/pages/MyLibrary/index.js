import React, {Component} from 'react';
import Book from '../../components/Book';
import Page from '../../components/Page';
import {connect} from 'react-redux';
import {
    getBooksDetails,
    getBooksSubject,
    updateBooks,
} from './../../store/reducers/books';

class MyLibrary extends Component {
    state = {
        books: [],
    };

    toggleBook(index) {
        let books = this.props.books;
        books[index].read = !books[index].read;
        this.props.updateBooks(books);
        this.forceUpdate();
    }

    componentDidMount() {
        if (!this.props.books.length)
            this.props.getBooksSubject('science_fiction').then(({payload}) => {
                let data = payload.data;

                let isbn = data.works
                    .filter((item) => item.availability?.isbn)
                    .map((item) => item.availability.isbn);

                let olid = data.works
                    .filter((item) => !item.availability?.isbn)
                    .map((item) => item.key.replace('/works/', ''));

                this.props.getBooksDetails(
                    `ISBN:${isbn.join()},OLID:${olid.join()}`,
                );
            });
    }

    render() {
        const {books} = this.props;

        return (
            <Page>
                {books.map((item, index) => (
                    <Book
                        key={`book-${index}-${item.read}`}
                        item={item.details}
                        cover={item.thumbnail_url?.replace('-S', '-M')}
                        read={item.read}
                        onClick={() => this.toggleBook(index)}
                    />
                ))}
            </Page>
        );
    }
}

const mapStateToProps = ({books}) => ({
    books: books.data,
});

const mapDispatchToProps = {
    getBooksSubject,
    getBooksDetails,
    updateBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyLibrary);
