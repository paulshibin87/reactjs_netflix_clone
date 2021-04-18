import React, { useEffect, useState } from 'react'
import '../css/nav.css'

export default function Nav() {
    const [handleshow, setHandleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                setHandleShow(true)
            }else{
                setHandleShow(false)
            }
        })
        return ()=>{
            window.removeEventListener("scroll");    
        }
        
    }, [])
    return (
        <div className={`nav ${handleshow && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
                alt=" Netflix Logo"
             />
             <img
                className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                alt=" Netflix avatar"
             />
        </div>
    )
}
