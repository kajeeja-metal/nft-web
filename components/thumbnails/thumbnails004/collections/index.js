import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from './Collections002.module.scss';

import Thumbs from '../../../../public/profile/profile002/images/thumbs.png';


export default function Collections004() {
      return (
		<>
		<div className={classes.collectionWraps}>
			<article className={classes.thumbsWrap}>
				<div className={classes.front}>
					<Link className={classes.thumbsItem} href="/">
						<a>
						<Image
							src={Thumbs}
							height={600}
							width={600}
							alt="Thumbs"
						/>
						</a>
					</Link>
				</div>
				<div className={classes.back}>
					<h3>Name Description</h3>
				</div>
			</article>
			<article className={classes.thumbsWrap}>
			<div className={classes.front}>
					<Link className={classes.thumbsItem} href="/">
						<a>
						<Image
							src={Thumbs}
							height={600}
							width={600}
							alt="Thumbs"
						/>
						</a>
					</Link>
				</div>
				<div className={classes.back}>
					<h3>Name Description</h3>
				</div>
			</article>
			<article className={classes.thumbsWrap}>
			<div className={classes.front}>
					<Link className={classes.thumbsItem} href="/">
						<a>
						<Image
							src={Thumbs}
							height={600}
							width={600}
							alt="Thumbs"
						/>
						</a>
					</Link>
				</div>
				<div className={classes.back}>
					<h3>Name Description</h3>
				</div>
			</article>
			<article className={classes.thumbsWrap}>
			<div className={classes.front}>
					<Link className={classes.thumbsItem} href="/">
						<a>
						<Image
							src={Thumbs}
							height={600}
							width={600}
							alt="Thumbs"
						/>
						</a>
					</Link>
				</div>
				<div className={classes.back}>
					<h3>Name Description</h3>
				</div>
			</article>
        </div>
		</>
  );
}

