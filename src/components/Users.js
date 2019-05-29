import React, { Component } from 'react';
import User from './User';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';

export default class Users extends Component {
    InstaService = new InstaService();
    state = {
        users: [],
        error: false,
    }
    componentDidMount() {
        this.updateUsers();
    }

    updateUsers() {
        this.InstaService.getAllUsers()
            .then(this.onUsersLoaded)
            .catch(this.onError)
    }

    onUsersLoaded = (items) => {

        this.setState({
            users: items
        })
    }
    onError = (err) => {
        this.setState = {
            error: false
        }
    }
    renderItems(arr) {
        return arr.map((item) => {
            const { name, altname, photo, id } = item;
            return (
                <User name={name} alt={altname} src={photo} key={id} min></User>
            )
        })
    }

    render() {
        const {error, users} = this.state;
        if(error) {
            return <ErrorMessage />
        }

        const items = this.renderItems(users);
        return (
            <div className="right">
                <User src="https://cdn.acidcow.com/pics/20100226/most_beautiful_men_80.jpg" />
                <div className="users__block">
                    {items}
                </div>
            </div>
        )
    }
}


/*import React from 'react';
import User from "./User";
    export default function Users() {

    return (
    <div className="right">
        <User
            src="https://best-shop.by/3683-large_default/antonio-banderas-blue-seduction-for-men.jpg"
            alt="AB"
            name="Banderos"/>
        <div className="users__block">
            <User
                src="https://best-shop.by/3683-large_default/antonio-banderas-blue-seduction-for-men.jpg"
                alt="AB"
                name="Banderos"
                min/>

            <User
                src="https://best-shop.by/3683-large_default/antonio-banderas-blue-seduction-for-men.jpg"
                alt="AB"
                name="Banderos"
                min/>

            <User
                src="https://best-shop.by/3683-large_default/antonio-banderas-blue-seduction-for-men.jpg"
                alt="AB"
                name="Banderos"
                min/>

            <User
                src="https://best-shop.by/3683-large_default/antonio-banderas-blue-seduction-for-men.jpg"
                alt="AB"
                name="Banderos"
                min/>
        </div>
    </div>
)
}*/
