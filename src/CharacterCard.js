import React, { useState } from 'react';
import './App.css';
export default function CharacterCard(props) {


        const [active, setActive] = useState(false);
        const activate = () => {
            if(!active){
            setActive(true)
            props.activationHandler(props.value)
            }
            
           
        setActive(true)
        }
        const className = `card ${active ? 'activeCard': ''}`
        return (
        <div className={className} onClick={activate}>{props.value}</div>
        )

}


