import React from 'react'
import { bubble as Menu } from 'react-burger-menu'
import './BurgerMenu.css'


const BurgerMenu = () => {
    return(
        <Menu left>
            <a to="/home" activeClassName="selected" className="list_burger">Home<br/><span>start</span></a>
            <a to="/mydosages" activeClassName="selected" className="list_burger">Work<br/><span>my productions</span></a>
            <a to="/myappointements" activeClassName="selected" className="list_burger">About<br/><span>me</span></a>
        </Menu>
    )
}

export default BurgerMenu