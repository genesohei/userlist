import React, { Component } from 'react';
import Users from '../Users';
import './style.css';

export default class Content extends Component {
    render() {
        return (
            <div className="content"><Users/></div>
        )
    }
}