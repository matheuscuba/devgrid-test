import React from 'react';

import './report-month.scss';
import Page from '../Page';
import Book from '../Book';

function ReportMonth(props) {
    return (
        <div className="report-month">
            <h2 className="month-title">{props.month}</h2>
            <h4 className="month-subtitle">
                Number of books: {props.books.length}
            </h4>
            <Page>
                {props.books.map((item, index) => (
                    <Book
                        key={`book-${index}-${item.read}`}
                        index={index}
                        item={item}
                        showButton={false}
                        onClick={() => this.toggleBook(index)}
                    />
                ))}
            </Page>
        </div>
    );
}

export default ReportMonth;
