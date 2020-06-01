import React, {Component} from 'react';

import './button.scss';

class Button extends Component {
    state = {
        active: false,
    };

    componentDidMount() {
        this.setState({active: !!this.props.active});
    }

    onClick() {
        this.setState({active: !this.state.active});
        this.props.onClick();
    }

    render() {
        return (
            <button
                onClick={() => this.onClick()}
                className={this.state.active ? 'btn active' : 'btn'}>
                {this.state.active ? 'READ' : 'MARK AS READ'}
            </button>
        );
    }
}

export default Button;
