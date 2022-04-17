import React from 'react';
import Link from "next/link";
import Assets006 from './assets';
import Collections006 from './collections';
import Exhibitions006 from './exhibitions';
import classes from './Thumbs006.module.scss'

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
	
	</>
  );
}

export default Thumbs006;
