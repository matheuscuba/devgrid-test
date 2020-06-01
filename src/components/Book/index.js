import React, {Component} from 'react';

import './book.scss';
import Button from '../Button';

class Book extends Component {
    // state = {
    //     visible: false,
    // };

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({visible: true});
    //     }, 100);
    // }

    render() {
        const item = this.props.item;

        let authors = item.authors?.map((author) => author.name).join(', ');
        let description = item.description?.value;

        if (description)
            description =
                description.slice(0, 120) +
                (description.length > 120 ? '...' : '');

        let cover = this.props.cover;

        if (!cover)
            cover =
                'https://via.placeholder.com/176x265/7a8c99/fff?text=%20%20No+Cover';

        return (
            <div
                className="book"
                style={{animationDelay: this.props.index * 60 + 'ms'}}>
                <div
                    className="cover"
                    style={{backgroundImage: `url('${cover}')`}}></div>
                <div className="details">
                    <h4 className="title">{item.title}</h4>
                    <h5 className="author">{authors}</h5>
                    <h5 className="year">Publish Date: {item.publish_date}</h5>
                    <p className="description">{description}</p>
                    {this.props.showButton !== false ? (
                        <Button
                            active={this.props.read}
                            onClick={this.props.onClick}
                        />
                    ) : null}
                </div>
            </div>
        );
    }
}

export default Book;
