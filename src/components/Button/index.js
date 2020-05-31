import React from 'react';

import './button.scss';

function Button(props) {
    return (
        <button
            onClick={props.onClick}
            className={props.active ? 'btn active' : 'btn'}>
            {props.children}
        </button>
    );
}

export default Button;
