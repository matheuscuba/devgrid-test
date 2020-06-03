import React, {Component} from 'react';
import {connect} from 'react-redux';

import './report.scss';
import ReportMonth from '../../components/ReportMonth';

class Report extends Component {
    state = {
        readBooks: [],
        notReadBooks: [],
        totalBooks: 0,
    };

    componentDidMount() {
        this.setState({
            readBooks: this.props.books.filter((item) => item.read),
            notReadBooks: this.props.books.filter((item) => !item.read),
            totalBooks: this.props.books.length,
        });
    }

    organizeBooksPerMonth() {
        let arr = {};

        this.state.readBooks.forEach((book) => {
            let month = new Date(book.readDate).getMonth();
            if (!arr[month]) arr[month] = [];

            arr[month].push(book);
        });

        let output = [];
        Object.entries(arr).forEach(([key, value]) => {
            let month = new Date(1, key, 1).toLocaleString('en-us', {
                month: 'long',
            });
            output.push({month, books: value});
        });

        return output;
    }

    render() {
        const {readBooks, notReadBooks, totalBooks} = this.state;

        return (
            <div className="report-page">
                <div className="report-info-wrapper">
                    <h2 className="report-info color-white">
                        <span className="font-light">
                            Total books in the Library
                        </span>
                        {totalBooks}
                    </h2>
                    <h2 className="report-info color-white">
                        <span className="font-light">Total books read</span>
                        {readBooks.length}
                    </h2>
                    <h2 className="report-info color-white">
                        <span className="font-light">Total books not read</span>
                        {notReadBooks.length}
                    </h2>
                </div>
                <div className="months-wrapper">
                    {this.organizeBooksPerMonth().map((item) => (
                        <ReportMonth month={item.month} books={item.books} />
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({books}) => ({
    books: books.data,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Report);
