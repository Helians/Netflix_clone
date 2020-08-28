import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {

    const [show,handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });

        return () => {
            window.removeEventListener("scroll");
        }
    },[]);

    return (
        <nav className={`navbar ${show && "navbar__black"}`}>
            <img className="navbar__brand" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="netflix logo"/>
        </nav>
    )
}

export default Nav;