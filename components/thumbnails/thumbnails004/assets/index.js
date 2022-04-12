import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from './Assets002.module.scss';

import Thumbs from '../../../../public/profile/profile002/images/thumbs.png';

export default function Assets002() {
      return (
		<>
			<div className={classes.assetsAll}>
						<article className={classes.thumbsWrapAll}>
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

						<article className={classes.thumbsWrapAll}>
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
						<article className={classes.thumbsWrapAll}>
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
						<article className={classes.thumbsWrapAll}>
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
						<div className="w-100 d-none d-md-block"></div>
						<article className={classes.thumbsWrapAll}>
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
						<article className={classes.thumbsWrapAll}>
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
						<article className={classes.thumbsWrapAll}>
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
						<article className={classes.thumbsWrapAll}>
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
						<article className={classes.thumbsWrapAll}>
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
						<div className="w-100 d-none d-md-block"></div>
						<article className={classes.thumbsWrapAll}>
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
						<article className={classes.thumbsWrapAll}>
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
						<article className={classes.thumbsWrapAll}>
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
						<article className={classes.thumbsWrapAll}>
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

