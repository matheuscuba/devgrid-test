import React from 'react';

import './book.scss';
import Button from '../Button';

function Book() {
    let randomImage = 'https://picsum.photos/176/265?a=' + Math.random();

    return (
        <div className="book">
            <div
                className="cover"
                style={{backgroundImage: `url('${randomImage}')`}}></div>
            <div className="details">
                <h4 className="title">Fire under Ash</h4>
                <h5 className="author">Saskya Jain</h5>
                <p className="description">
                    The adventures of a boy growing up in the nineteenth century
                    in a Mississippi River town, as he plays hookey on an
                    island, witnesses a crime, hunts for pirates’ treasure, and
                    becomes lost in a cave.
                </p>
                <Button>MARK AS READ</Button>
            </div>
        </div>
    );
}

export default Book;
