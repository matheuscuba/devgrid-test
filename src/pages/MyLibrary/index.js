import React, {Component} from 'react';
import Book from '../../components/Book';
import Page from '../../components/Page';
import {connect} from 'react-redux';
import {
    getBooksDetails,
    getBooksSubject,
    updateBooks,
} from './../../store/reducers/books';
import LoadingIcon from '../../components/LoadingIcon';

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
class MyLibrary extends Component {
    state = {
        books: [],
    };

    toggleBook(index) {
        let books = this.props.books;
        books[index].read = !books[index].read;
        books[index].readDate = new Date(2020, randomInteger(1, 12), 1);
        this.props.updateBooks(books);
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
                {this.props.loading ? (
                    <LoadingIcon message={this.props.message} />
                ) : null}
                {books.map((item, index) => (
                    <Book
                        key={`book-${index}-${item.read}`}
                        index={index}
                        item={item}
                        onClick={() => this.toggleBook(index)}
                    />
                ))}
            </Page>
        );
    }
}

const mapStateToProps = ({books}) => ({
    books: books.data,
    loading: books.loading,
    message: books.loadingMessage,
});

const mapDispatchToProps = {
    getBooksSubject,
    getBooksDetails,
    updateBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyLibrary);
