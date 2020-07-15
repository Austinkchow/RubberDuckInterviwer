import React from "react"
import './Header.sass'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className="topNav">
            <div className="Title">
                <Link to={'/'}>Rubber Duck Interviewer</Link>
            </div>
            <div className="myLinks">
                <ul>
                    <li><Link to={'/questionSets'}>Question Set Index</Link></li>
                    <li><Link to={'/questionSets/new'}>Question Set New</Link></li>
                    <li><Link to={'/user/register'}>Register</Link></li>
                    <li><Link to={'/user/login'}>Login</Link></li>
                    <li><Link to={'/user/logout'}>Logout</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Header