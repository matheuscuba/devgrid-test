import React from 'react';

import './button.scss';

function Button(props) {
    return (
        <button className={props.read ? 'btn active' : 'btn'}>
            {props.children}
        </button>
    );
}

export default Button;
