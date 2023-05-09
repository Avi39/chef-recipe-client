/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const ChefNav = () => {
    const [chefs,setChefs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error=>console.error(error))
    },[])
    
    return (
        <div>
            <h2>Chef nav</h2>
        </div>
    );
};

export default ChefNav;