import React, { useState } from 'react';
import Link from 'next/link';
import classes from './stepsidebar.module.scss';




const StepSidebar = () => {
  const [page, setPage] = useState(0);
  return (
    <>  
        <h3 className={classes.sidebarTitle}>Collection Setting</h3>
        <ul className={classes.menuLinkWrap}>
            <li className={classes.menuItem  }><Link href="/"><a className='active'>Theme</a></Link></li>
            <li className={classes.menuItem}><Link href="/"><a>Collection Info</a></Link></li>
            <li className={classes.menuItem}><Link href="/"><a>Collection Thumbnail</a></Link></li>
            <li className={classes.menuItem}><Link href="/"><a>Collection Assets</a></Link></li>
            <li className={classes.menuItem}><Link href="/"><a>Customize Style</a></Link></li>
        </ul>
    </>
  );
}

export default StepSidebar;
