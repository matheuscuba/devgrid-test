import React from 'react';

import './book.scss';
import Button from '../Button';

function Book(props) {
    const item = props.item;

    let authors = item.authors.map((author) => author.name).join(', ');

    return (
        <div className="book">
            <div
                className="cover"
                style={{backgroundImage: `url('${props.cover}')`}}></div>
            <div className="details">
                <h4 className="title">{item.title}</h4>
                <h5 className="author">{authors}</h5>
                <p className="description">{item.subtitle}</p>
                <Button>MARK AS READ</Button>
            </div>
        </div>
    );
}

export default Book;
