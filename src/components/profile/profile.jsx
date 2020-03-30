import React from 'react';
import classes from './profile.module.css';
import MyPosts from './my-posts/my-posts';
import ProfileInfo from './profile-info/profile-info';

const Profile=(props)=>{
    return(
        <div >
                <ProfileInfo />
                <MyPosts postData={props.postData}/>
        </div>
    )
};
 
export default Profile;