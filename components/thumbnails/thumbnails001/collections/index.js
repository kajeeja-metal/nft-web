import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from './Collections001.module.scss';
import Thumbs from '../../../../public/profile/profile001/images/thumbs.png';


export default function Collections001() {
      return (
		<>
		<div className={classes.collectionWraps}>
				<article className={classes.thumbsWrap}>
					<Link className={classes.thumbsItem} href="/">
						<a>
						<Image
							src={Thumbs}
							height={512}
							width={512}
							alt="Thumbs"
						/>
						</a>
					</Link>
				</article>
				<article className={classes.thumbsWrap}>
				<Link className={classes.thumbsItem} href="/">
					<a>
					<Image
						src={Thumbs}
						height={512}
						width={512}
						alt="Thumbs"
					/>
					</a>
				</Link>
				</article>
				<article className={classes.thumbsWrap}>
				<Link className={classes.thumbsItem} href="/">
					<a>
					<Image
						src={Thumbs}
						height={512}
						width={512}
						alt="Thumbs"
					/>
					</a>
				</Link>
				</article>
				<article className={classes.thumbsWrap}>
				<Link className={classes.thumbsItem} href="/">
					<a>
					<Image
						src={Thumbs}
						height={512}
						width={512}
						alt="Thumbs"
					/>
					</a>
				</Link>
				</article>
				<article className={classes.thumbsWrap}>
				<Link className={classes.thumbsItem} href="/">
					<a>
					<Image
						src={Thumbs}
						height={512}
						width={512}
						alt="Thumbs"
					/>
					</a>
				</Link>
				</article>
				<article className={classes.thumbsWrap}>
				<Link className={classes.thumbsItem} href="/">
					<a>
					<Image
						src={Thumbs}
						height={512}
						width={512}
						alt="Thumbs"
					/>
					</a>
				</Link>
				</article>
			</div>
		</>
  );
}

