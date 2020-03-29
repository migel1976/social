import React from 'react';
import classes from './post.module.css';


const Post=(props)=>{
    
    return(
        <div>
            <div className={classes.item}>
                {props.message}
            </div>
            <div>
                <img src='http://kite4life.ru/wp-content/uploads/2015/04/img00003.jpg'/>
            </div>
            <div className={classes.like}>
                like {props.likeCount}
                </div>
        </div>
    )
};

export default Post;