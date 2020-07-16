import React from "react"
// import './Header.css'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className="topNav">
            <div className="Title">
                <Link to={'/'}>Rubber Duck Interviewer</Link>
            </div>
            <div className="myLinks">
                {props.currentUser ?
                    <ul>
                        <li><Link to={'/questionSets'}>Question Set Index</Link></li>
                        <li><Link to={'/questionSets/new'}>Question Set New</Link></li>
                        <li><Link to={'/user/logout'}>Logout</Link></li>
                        <li><Link to={`/user/${props.currentUser}`}>Profile Page</Link></li>
                    </ul> :
                    <ul>
                        <li><Link to={'/questionSets'}>Question Set Index</Link></li>
                        <li><Link to={'/user/register'}>Register</Link></li>
                        <li><Link to={'/user/login'}>Login</Link></li>
                    </ul>}
            </div>
        </header>
    );
}

export default Header