import React, {Component} from 'react';
import './style.css';

export default class User extends Component {
    render() {
        const imgStyle = {
            backgroundImage: `url(${this.props.user.img})`
        };
        return (
            <div className="user">
                <div className="user__img" style={imgStyle}/>
                <span>{this.props.user.name}</span>
            </div>
        )
    }
}