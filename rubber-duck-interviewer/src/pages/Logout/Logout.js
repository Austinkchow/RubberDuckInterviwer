import React, { Component } from 'react'
import UserModel from '../../models/user';

class Logout extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        UserModel.logout()
            .then(() => {
                this.props.history.push('/')
            })
    }

    render() {
        return (
            <div>
                <h2>Are you sure you want to Logout ?</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="submit" value="Yes" />
                </form>
            </div>
        )
    }
}

export default Logout;