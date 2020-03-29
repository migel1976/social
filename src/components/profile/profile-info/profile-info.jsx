import React from 'react';
import classes from './profile.module.css';

const ProfileInfo=(props)=>{
    return(
        <div>
            <div>
            <img src='https://cdn.shopify.com/s/files/1/1738/1521/products/rrd-rrd-religion-mk8-kitesurfing-kite-2018-kites-3657225502800_2000x.jpg?v=1536165006' /> 
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
};
export default ProfileInfo;