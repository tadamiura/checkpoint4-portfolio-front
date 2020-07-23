import React, { useState, useEffect } from 'react';
import BurgerMenu from './BurgerMenu';

import { Link } from 'react-router-dom'

import axios from 'axios'
import './MyWorkList.css'

const MyWorkList = () => {

    const [myWorkList, setMyWorkList] = useState(null)

    const getMyWorkList = () => {
        axios.get('http://localhost:8080/api/project/mywork')
            .then((res) => setMyWorkList(res.data))
    }

    useEffect(() => getMyWorkList(), [])

    return myWorkList === null
        ? <p>Loading</p>
        : (
            <div>
                <div>
                    <BurgerMenu />
                </div>
                <div className='myWorkList'>
                    {myWorkList.map(list => 
                    <Link className='project-link'><p >{list.project_title}</p></Link>
                    )}
                </div>
            </div>
        )
}

export default MyWorkList