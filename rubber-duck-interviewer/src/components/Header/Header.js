import React from "react"

import './Header.css'
const Nav = (props) => {
    return (
        <nav className='nav' >
            <h1>Rubber Duck Interviewer</h1>
            <section className='right-menu'>
                {props.loggedIn ? (
                    <p>Hello, {props.user.name}</p>
                ) : (<button>Login</button>)}
            </section>
        </nav>
    )
}

export default Nav