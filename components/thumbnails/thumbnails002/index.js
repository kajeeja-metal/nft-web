import React from 'react';
import Link from "next/link";
import Assets002 from './assets';
import Collections002 from './collections';
import Exhibitions002 from './exhibitions';
import classes from './Thumbs002.module.scss'

const Thumbs002 = () => {
  return (
	<>
		<div className="tab-content">
			<div className="tab-pane fade show active" id="collectionWrap">
				<Collections002/>
			</div>
			<div className="tab-pane fade" id="spacesWrap">
				<Exhibitions002 />
			</div>
			<div className="tab-pane fade" id="assetsAll">
				<Assets002 />
			</div>
		</div>
		<div className={classes.paginationWrap}>
			<ul>
				<li className={classes.active}><Link href="/" ><a>1</a></Link></li>
				<li><Link href="/" ><a>2</a></Link></li>
				<li><Link href="/" ><a>3</a></Link></li>
			</ul>
		</div>	
	</>
  );
}

export default Thumbs002;
