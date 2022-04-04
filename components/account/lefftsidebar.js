import React from 'react';
import Link from 'next/link';
import classes from './MyAccountLefftSidebar.module.scss';


const MyAccountLefftSidebar = () => {
  return (
    <>
        <h3 className={classes.menuHead}>General</h3>
        <ul className={classes.menuWrap}>
            <li className={classes.menuItem}><Link href="/"><a>My Account</a></Link></li>
            <li className={classes.menuItem}><Link href="/"><a>My Assets</a></Link></li>
            <li className={classes.menuItem}><Link href="/"><a>My Collections</a></Link></li>
            <li className={classes.menuItem}><Link href="/"><a>My Exhibitons</a></Link></li>
        </ul>
        <h3 className={classes.menuHead}>Personalize your theme</h3>
        <ul className={classes.menuWrap}>
            <li className={classes.menuItem}><Link href="/"><a>Profile Template</a></Link></li>
            <li className={classes.menuItem}><Link href="/"><a>Typography</a></Link></li>
        </ul>
    </>
  );
}

export default MyAccountLefftSidebar;
