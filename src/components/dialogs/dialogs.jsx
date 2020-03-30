import React from 'react';
import classes from './dialogs.module.css';
import DialogItem from './dialog-item/dialog-item';
import Message from './message/message';

let dialogsData=[
    {id:1,name:'Alex'},
    {id:2,name:'Denis'},
    {id:3,name:'Oleg'},
    {id:4,name:'Victor'}
];
let dialogsElement=dialogsData.map(
                    dialog=><DialogItem name={dialog.name} id={dialog.id} />);
let messagesData=[
    {id:1,message:'Aloha'},
    {id:2,message:'Kite'},
    {id:3,message:'In Dubna'},
    {id:4,message:'Check one more time'}
];

let messageElement=messagesData.map(message=><Message message={message.message} id={message.id} /> );

const Dialogs =(props)=>{
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElement}
                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} /> */}
            </div>
            <div className={classes.messages}>
                {messageElement}
                {/* <Message message={messagesData[0].message} id={messagesData[0].id} />
                <Message message={messagesData[1].message} id={messagesData[1].id}  />
                <Message message={messagesData[2].message} id={messagesData[2].id}  /> */}
            </div>
        </div>
    )
};
export default Dialogs;