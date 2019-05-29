import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return(
            <div className="post">
                <User
                    src="https://best-shop.by/3683-large_default/antonio-banderas-blue-seduction-for-men.jpg"
                    alt="AB"
                    name="Banderos"
                    min/>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    vkkvnk kvaksvk dkvakvk akvkvka
                </div>
            </div>
        );
    }
}