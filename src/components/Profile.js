import React from 'react';
import User from './User';
import Pallete from './Palette';

const Profile = () => {
    return (
        <div className="container profile">
            <User
                 src="https://cdn.acidcow.com/pics/20100226/most_beautiful_men_80.jpg"
                 alt="Man"
                 name="some_cool_man"/>

             <Pallete/>

        </div>
    );
}
export default Profile;
