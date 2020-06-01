import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

import './nav.scss';

class Nav extends Component {
    state = {
        menu: [
            {label: 'MY LIBRARY', path: '/', active: true},
            {label: 'READ BOOKS', path: '/read-books'},
            {label: 'REPORT', path: '/report'},
        ],
    };

    componentDidMount() {
        let pathname = this.props.location.pathname;
        let menu = this.state.menu.map((item) => ({
            ...item,
            active: item.path === pathname,
        }));
        this.setState({menu});
    }

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

export default withRouter(Nav);
