import React from 'react';
import Link from 'next/link';
import classes from './LeftSidebar.module.scss';


const LeftSidebar = () => {
  return (
    <>
        <h3 className={classes.menuHead}>General</h3>
        <ul className={classes.menuWrap}>
            <li className={classes.menuItem}><Link href="account"><a>My Account</a></Link></li>
            <li className={classes.menuItem}><Link href="allassets"><a>All Assets</a></Link></li>
            <li className={classes.menuItem}><Link href="myassets"><a>My Assets</a></Link></li>
            <li className={classes.menuItem}><Link href="mycollections"><a>My Collections</a></Link></li>
            <li className={classes.menuItem}><Link href="myexhibitons"><a>My Exhibitons</a></Link></li>
        </ul>
        <h3 className={classes.menuHead}>Personalize your theme</h3>
        <ul className={classes.menuWrap}>
            <li className={classes.menuItem}><Link href="/"><a>Profile Template</a></Link></li>
            <li className={classes.menuItem}><Link href="/"><a>Typography</a></Link></li>
        </ul>
    </>
  );
}

export default LeftSidebar;
