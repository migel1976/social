import React from 'react';
import classes from './navbar.module.css';



const Navbar=()=>{
    return(
        <nav className={classes.nav}>
            <div className={classes.item}>
                <a href='/profile'>Profile</a>
            </div>
            <div className={classes.item}>
                <a href='/dialogs'>Messages</a>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <a href='/news'>News</a>
            </div>
            <div className={classes.item}>
                <a href='/music'>Music</a>
            </div>
            <div className={classes.item}>
                <a href='/settings'>Settings</a> 
            </div>
        </nav>
    )
};

export default Navbar;