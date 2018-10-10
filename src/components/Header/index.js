import React, { Component } from 'react';
import './style.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__wrap">
                    <div className="header__logo"></div><span>React</span>
                </div>
            </div>
        )
    }
}