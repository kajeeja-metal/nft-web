import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from './Exhibitions001.module.scss';

import thumbsFull from '../../../../public/profile/profile001/images/thumbsfull.png';


export default function Exhibitions001() {
      return (
		<>
			<div className={classes.spacesWrap}>
				<Link className={classes.thumbsItem} href="/">
					<a>
					<article className={classes.thumbsWrap}>
						<div className={classes.thumbsContent}>
							<h3 className={classes.ItemTitle}>Space Name</h3>
						</div>
						<Image
						src={thumbsFull}
						height={900}
						width={1600}
						alt="Thumbs"
						/>
					</article>
					</a>
				</Link>
				<Link className={classes.thumbsItem} href="/">
					<a>
					<article className={classes.thumbsWrap}>
						<div className={classes.thumbsContent}>
							<h3 className={classes.ItemTitle}>Space Name</h3>
						</div>
						<Image
						src={thumbsFull}
						height={900}
						width={1600}
						alt="Thumbs"
						/>
					</article>
					</a>
				</Link>
			</div>
		</>
  );
}

