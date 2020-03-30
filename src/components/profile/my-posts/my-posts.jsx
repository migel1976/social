import React from 'react';
import classes from './my-posts.module.css';
import Post from './post/post';

const MyPosts =(props)=>{
    let postData=[
        {id:1, message:'HI, it is my life', likeCount:12},
        {id:2, message:'Strange is everthing', likeCount:11},
        {id:3, message:'Soon it will be end', likeCount:18},
        
    ];

    let postElement=postData.map(el=>(<Post message={el.message} likeCount={el.likeCount} /> ));


    
    return(
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <button>add post</button>
            
            <div>
                <div className={classes.posts}>
                    {postElement}
                    {/* <Post message={postData[0].message} likeCount={postData[0].likeCount}/>
                    <Post message={postData[1].message} likeCount={postData[1].likeCount}/>
                    */}
                </div>
            </div>
        </div>
    )
}
export default MyPosts;