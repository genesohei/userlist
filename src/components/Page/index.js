import React from 'react';
import Header from '../Header';
import Content from '../Content';
import './style.css';

export default class Page extends React.Component {
    render() {
        return (
            <div className="page">
                <Header/>
                <Content/>
            </div>
        )
    }
}