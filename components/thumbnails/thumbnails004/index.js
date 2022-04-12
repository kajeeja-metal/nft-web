import React, {useState} from 'react';
import Assets004 from './assets';
import Collections004 from './collections';
import Exhibitions004 from './exhibitions';
// import classes from './Thumbs004.module.scss'

const Thumbs004 = () => {
  return (
	<>
		<div className="tab-content">
			<div className="tab-pane fade " id="collectionWrap">
				<Collections004/>
			</div>
			<div className="tab-pane fade show active" id="spacesWrap">
				<Exhibitions004 />
			</div>
			<div className="tab-pane fade" id="assetsAll">
				<Assets004 />
			</div>
		</div>
		{/* <div className={classes.paginationWrap}>
			<ul>
				<li className={classes.active}><Link href="/" ><a>1</a></Link></li>
				<li><Link href="/" ><a>2</a></Link></li>
				<li><Link href="/" ><a>3</a></Link></li>
			</ul>
		</div>	 */}
	</>
  );
}

export default Thumbs004;
