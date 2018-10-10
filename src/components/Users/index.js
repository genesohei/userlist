import React, {Component} from 'react';
import UsersList from '../UsersList';
import SearchBar from '../SearchBar';
import './style.css';

import users from '../../database';

export default class Users extends Component {
    constructor() {
        super();
        this.state = {
            filterText: ''
        };

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    render() {
        return (
            <div className="users">
                <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextChange={this.handleFilterTextChange}
                />
                <UsersList
                    filterText={this.state.filterText}
                    users={users}
                />
            </div>
        )
    }
}