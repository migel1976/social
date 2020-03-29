import React from 'react';
import classes from './my-posts.module.css';
import Post from './post/post';

const MyPosts =(props)=>{
    
    return(
        <div>
            My posts
            <div>
                <textarea></textarea>
            </div>
            <button>add post</button>
            
            <div>
                <div className={classes.item}>
                    <Post message='Hi, how are you' likeCount='4'/>
                    <Post message='It is my first post' likeCount='7'/>
                   
                </div>
            </div>
        </div>
    )
}
export default MyPosts;