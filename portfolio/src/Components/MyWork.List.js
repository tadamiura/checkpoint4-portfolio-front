import React, { useState, useEffect } from 'react';
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
            <div className='myWorkList'>
                {myWorkList.map((list,index) =>
                    <Link key={index.id} to='project' className='project-link'>
                        <h2 className='title-project'>{list.project_title}</h2>
                        <h3 className='stack-duration'>{list.language}<br />projet réalisé en : {list.duration}</h3>
                    </Link>
                )}
            </div>
        )
}

export default MyWorkList