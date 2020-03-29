import React from 'react';
import classes from './dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem=(props)=>{
    let path='/dialogs/'+props.id;
    return(
        <div className={classes.dialog}> 
            <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    )
}; 

const Message=(props)=>{
    return(
        <div>
            <div className={classes.messages}>{props.message}</div>
        </div>
    )
};

const Dialogs =(props)=>{
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItem name='Andrei' id='1'/>
                <DialogItem name='Koliy' id='2' />
            </div>
            <div className={classes.messages}>
                <Message message='Hi' />
                <Message message='Is everthing all right? ' />
                <Message message='How do you do?' />
            </div>
        </div>
    )
};
export default Dialogs;