import React, { useState } from 'react';
import Link from 'next/link';
import classes from './sidebar.module.scss';

const ExhibitionSidebar = () => {
  const [page, setPage] = useState(0);
  return (
    <>  
        <h3 className={classes.sidebarTitle}>Exhibition  Setting</h3>
        <ul className={classes.menuLinkWrap}>
            <li className={classes.menuItem  }><Link href="/"><a className='active'>Exhibition Room</a></Link></li>
            <li className={classes.menuItem}><Link href="/"><a>Exhibition Info</a></Link></li>
            <li className={classes.menuItem}><Link href="/"><a>Customize Exhibition Style</a></Link></li>
  
        </ul>
    </>
  );
}

export default ExhibitionSidebar;
