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

let dialogsData=[
    {id:1,name:'Alex'},
    {id:2,name:'Denis'},
    {id:3,name:'Oleg'}
];

let messagesData=[
    {id:1,message:'Aloha'},
    {id:2,message:'Kite'},
    {id:3,message:'In Dubna'}
];

const Dialogs =(props)=>{
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id} />
                <Message message={messagesData[1].message} id={messagesData[1].id}  />
                <Message message={messagesData[2].message} id={messagesData[2].id}  />
            </div>
        </div>
    )
};
export default Dialogs;