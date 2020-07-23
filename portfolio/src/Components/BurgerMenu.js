import React from 'react'
import { bubble as Menu } from 'react-burger-menu'
import './BurgerMenu.css'
import { NavLink } from 'react-router-dom'


const BurgerMenu = () => {
    return(
        <Menu left>
            <NavLink exact to="/" activeClassName="selected" className="list_burger">Home<br/><span>start</span></NavLink>
            <NavLink to="/worklist" activeClassName="selected" className="list_burger">Work<br/><span>my productions</span></NavLink>
            <NavLink to="/about" activeClassName="selected" className="list_burger">About<br/><span>me</span></NavLink>
        </Menu>
    )
}

export default BurgerMenu