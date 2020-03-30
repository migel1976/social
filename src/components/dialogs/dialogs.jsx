import React from 'react';
import classes from './dialogs.module.css';
import DialogItem from './dialog-item/dialog-item';
import Message from './message/message';


const Dialogs =(props)=>{
    let dialogsElement=props.dialogsData.map(
        dialog=><DialogItem name={dialog.name} id={dialog.id} />);

    let messageElement=props.messagesData.map(
        message=><Message message={message.message} id={message.id} /> );


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