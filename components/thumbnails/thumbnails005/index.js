import React from 'react';
import Assets005 from './assets';
import Collections005 from './collections';
import Exhibitions005 from './exhibitions';
// import classes from './Thumbs004.module.scss'

const Thumbs004 = () => {
  return (
	<>
		<div className="tab-content">
			<div className="tab-pane fade show active" id="collectionWrap">
				<Collections005/>
			</div>
			<div className="tab-pane fade " id="spacesWrap">
				<Exhibitions005 />
			</div>
			<div className="tab-pane fade " id="assetsAll">
				<Assets005 />
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
