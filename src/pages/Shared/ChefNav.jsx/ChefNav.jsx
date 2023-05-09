/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const ChefNav = () => {
    const [chefs,setChefs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error=>console.error(error))
    },[])

    return (
        <div>
            <h2>All Chefs</h2>
        </div>
    );
};

export default ChefNav;