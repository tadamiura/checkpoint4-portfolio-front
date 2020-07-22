import React from 'react'
import { bubble as Menu } from 'react-burger-menu'
import './BurgerMenu.css'


const BurgerMenu = () => {
    return(
        <Menu left>
            <a to="/home" activeClassName="selected" className="list_burger">Home</a>
            <a to="/mydosages" activeClassName="selected" className="list_burger">Work</a>
            <a to="/myappointements" activeClassName="selected" className="list_burger">About</a>
        </Menu>
    )
}

export default BurgerMenu