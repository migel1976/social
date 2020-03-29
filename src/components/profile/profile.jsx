import React from 'react';
import classes from './profile.module.css';
import MyPosts from './my-posts/my-posts';

const Profile=()=>{
    return(
        <div>
            <div>
            <img src='https://cdn.shopify.com/s/files/1/1738/1521/products/rrd-rrd-religion-mk8-kitesurfing-kite-2018-kites-3657225502800_2000x.jpg?v=1536165006' /> 
            </div>
            <div>
                ava 
            </div>
            <div>
                <MyPosts />
            </div>
        </div>
    )
};
 
export default Profile;