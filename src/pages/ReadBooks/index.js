import React, {Component} from 'react';
import Book from '../../components/Book';
import Page from '../../components/Page';
import {connect} from 'react-redux';

class ReadBooks extends Component {
    state = {
        books: [],
    };

    componentDidMount() {
        this.setState({books: this.props.books.filter((item) => item.read)});
    }

    render() {
        const {books} = this.state;

        return (
            <Page>
                {books.length ? (
                    books.map((item, index) => (
                        <Book
                            item={item}
                            index={index}
                            showButton={false}
                            key={index}
                        />
                    ))
                ) : (
                    <h2 className="color-white font-light empty">
                        You haven't read any book yet :(
                    </h2>
                )}
            </Page>
        );
    }
}

const mapStateToProps = ({books}) => ({
    books: books.data,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ReadBooks);
