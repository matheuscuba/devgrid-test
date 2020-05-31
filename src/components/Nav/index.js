import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './nav.scss';

class Nav extends Component {
    state = {
        menu: [
            {label: 'MY LIBRARY', path: '/', active: true},
            {label: 'READ BOOKS', path: '/read-books'},
            {label: 'REPORT', path: '/report'},
        ],
    };

    toggleActive(index) {
        let {menu} = this.state;
        menu = menu.map((item) => ({...item, active: false}));
        menu[index].active = true;
        this.setState({menu});
    }

    render() {
        const {menu} = this.state;

        return (
            <nav className="nav">
                <ul>
                    {menu.map((item, index) => (
                        <li key={`nav-${index}`}>
                            <Link
                                to={item.path}
                                onClick={() => this.toggleActive(index)}
                                className={item.active ? 'active' : ''}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default Nav;
