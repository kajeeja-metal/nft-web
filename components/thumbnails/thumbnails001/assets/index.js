import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from './Assets001.module.scss';

import Thumbs from '../../../../public/profile/profile001/images/thumbs.png';


export default function Assets001() {
      return (
		<>
			<div className={classes.assetsAll}>
				<article className={classes.thumbsWrap}>
				<Link href="/">
					<a className={classes.thumbsItem}>
					<Image
						src={Thumbs}
						height={512}
						width={512}
						alt="Thumbs"
					/>
					</a>
				</Link>
				<div className={classes.thumbsContent}>
					<h3 className={classes.ItemTitle}>Client teach me</h3>
					<p className={classes.ItemDesc}>
					Lorem ipsum dolor sit amet, consectetur ist at...
					</p>
				</div>
				</article>
				<article className={classes.thumbsWrap}>
				<Link href="/">
					<a className={classes.thumbsItem}>
					<Image
						src={Thumbs}
						height={512}
						width={512}
						alt="Thumbs"
					/>
					</a>
				</Link>
				<div className={classes.thumbsContent}>
					<h3 className={classes.ItemTitle}>Client teach me</h3>
					<p className={classes.ItemDesc}>
						Lorem ipsum dolor sit amet, consectetur ist at...
					</p>
				</div>
				</article>
				<article className={classes.thumbsWrap}>
				<Link href="/">
					<a className={classes.thumbsItem}>
					<Image
						src={Thumbs}
						height={512}
						width={512}
						alt="Thumbs"
					/>
					</a>
				</Link>
				<div className={classes.thumbsContent}>
					<h3 className={classes.ItemTitle}>R G B</h3>
					<p className={classes.ItemDesc}>
					Lorem ipsum dolor sit amet, consectetur ist at...
					</p>
				</div>
				</article>
				<article className={classes.thumbsWrap}>
				<Link href="/">
					<a className={classes.thumbsItem}>
					<Image
						src={Thumbs}
						height={512}
						width={512}
						alt="Thumbs"
					/>
					</a>
				</Link>
				<div className={classes.thumbsContent}>
					<h3 className={classes.ItemTitle}>Deekay Log-in</h3>
					<p className={classes.ItemDesc}>
					Lorem ipsum dolor sit amet, consectetur ist at...
					</p>
				</div>
				</article>
				<article className={classes.thumbsWrap}>
				<Link href="/">
					<a className={classes.thumbsItem}>
					<Image
						src={Thumbs}
						height={512}
						width={512}
						alt="Thumbs"
					/>
					</a>
				</Link>
				<div className={classes.thumbsContent}>
					<h3 className={classes.ItemTitle}>Titles</h3>
					<p className={classes.ItemDesc}>Thumbs Descriptions</p>
				</div>
				</article>
				<article className={classes.thumbsWrap}>
				<Link href="/">
					<a className={classes.thumbsItem}>
					<Image
						src={Thumbs}
						height={512}
						width={512}
						alt="Thumbs"
					/>
					</a>
				</Link>
				<div className={classes.thumbsContent}>
					<h3 className={classes.ItemTitle}>Titles</h3>
					<p className={classes.ItemDesc}>Thumbs Descriptions</p>
				</div>
				</article>
				<article className={classes.thumbsWrap}>
				<Link href="/">
					<a className={classes.thumbsItem}>
					<Image
						src={Thumbs}
						height={512}
						width={512}
						alt="Thumbs"
					/>
					</a>
				</Link>
				<div className={classes.thumbsContent}>
					<h3 className={classes.ItemTitle}>Titles</h3>
					<p className={classes.ItemDesc}>Thumbs Descriptions</p>
				</div>
				</article>
				<article className={classes.thumbsWrap}>
				<Link href="/">
					<a className={classes.thumbsItem}>
					<Image
						src={Thumbs}
						height={512}
						width={512}
						alt="Thumbs"
					/>
					</a>
				</Link>
				<div className={classes.thumbsContent}>
					<h3 className={classes.ItemTitle}>Titles</h3>
					<p className={classes.ItemDesc}>Thumbs Descriptions</p>
				</div>
				</article>
			</div>
		</>
  );
}

