import React, {Component} from 'react';
import User from '../User';

export default class UsersList extends Component {
    render() {
        const filterText = this.props.filterText;
        let userElements = [];

        if (!this.props.users || !this.props.users.length) {
            return <div className="users__empty">Список пользователей пуст</div>
        }

        this.props.users.forEach((user) => {
            if (user.name.indexOf(filterText) === -1) {
                return;
            }

            userElements.push(
                <User
                    user={user}
                    key={user.name}
                />
            );
        });

        return (
            <div className="users__list">{userElements}</div>
        )
    }
}