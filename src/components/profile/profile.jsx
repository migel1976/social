import React from 'react';
import classes from './profile.module.css';
import MyPosts from './my-posts/my-posts';
import ProfileInfo from './profile-info/profile-info';

const Profile=()=>{
    return(
        <div >
                <ProfileInfo />
                <MyPosts />
        </div>
    )
};
 
export default Profile;