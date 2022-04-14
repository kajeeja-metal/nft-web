import React from 'react';
import Assets006 from './assets';
import Collections006 from './collections';
import Exhibitions006 from './exhibitions';
// import classes from './Thumbs004.module.scss'

const Thumbs006 = () => {
  return (
	<>
		<div className="tab-content">
			<div className="tab-pane fade " id="collectionWrap">
				<Collections006/>
			</div>
			<div className="tab-pane fade " id="exhibitionWrap">
				<Exhibitions006 />
			</div>
			<div className="tab-pane fade show active" id="assetsWrap">
				<Assets006 />
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

export default Thumbs006;
