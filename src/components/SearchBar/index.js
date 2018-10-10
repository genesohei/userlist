import React, {Component} from 'react';
import './style.css';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    };

    render() {
        return (
            <div className="search">
                <input
                    className="search-form"
                    placeholder="Search users"
                    spellCheck="false"
                    autoComplete="off"
                    value={this.props.filterText}
                    type="text"
                    onChange={this.handleFilterTextChange}
                />
            </div>
        )
    }
}
