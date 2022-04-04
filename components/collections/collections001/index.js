import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from './Collection001.module.scss';

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Thumbs from '../../../public/profile/profile001/images/thumbs.png';
import Profile from '../../../public/profile/profile001/images/profile.png';
import downArrow from '../../../public/collections/collections001/images/down-arrow.svg';

import {faImage, faArrowRight, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
library.add(faImage, faArrowRight, faShareNodes, faHeart);


export default function Collection001() {
    useEffect(() => {
        document.querySelector("body").classList.add("collection001");
    });
      return (
		<>
			<div className={classes.collectionWrap}>
				<div className='container'>
					<div className={classes.collectionTop}>
						<div className={classes.headWrap}>
							<h1>Boy in the city</h1>
							<span>(100 Assets)</span>
						</div>
						<button type="button" className='btn btn-primary'><FontAwesomeIcon icon={faShareNodes} /> Share</button>
					</div>
				</div>
			</div>
			<div className='container'>
				<div className={classes.collectionContent}>
					Lorem Ipsum is simply dummy text of the printing and type setting industry.
				</div>
				<div className={classes.assetsAll}>
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
					<div className={classes.thumbsContent}>
						<h3 className={classes.ItemTitle}>Client teach me</h3>
						<p className={classes.ItemDesc}>
						Lorem ipsum dolor sit amet, consectetur ist at...
						</p>
					</div>
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
					<div className={classes.thumbsContent}>
						<h3 className={classes.ItemTitle}>Client teach me</h3>
						<p className={classes.ItemDesc}>
						Lorem ipsum dolor sit amet, consectetur ist at...
						</p>
					</div>
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
					<div className={classes.thumbsContent}>
						<h3 className={classes.ItemTitle}>R G B</h3>
						<p className={classes.ItemDesc}>
						Lorem ipsum dolor sit amet, consectetur ist at...
						</p>
					</div>
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
					<div className={classes.thumbsContent}>
						<h3 className={classes.ItemTitle}>Deekay Log-in</h3>
						<p className={classes.ItemDesc}>
						Lorem ipsum dolor sit amet, consectetur ist at...
						</p>
					</div>
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
					<div className={classes.thumbsContent}>
						<h3 className={classes.ItemTitle}>Titles</h3>
						<p className={classes.ItemDesc}>Thumbs Descriptions</p>
					</div>
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
					<div className={classes.thumbsContent}>
						<h3 className={classes.ItemTitle}>Titles</h3>
						<p className={classes.ItemDesc}>Thumbs Descriptions</p>
					</div>
					</article>
				</div>
				<div className={classes.seeMore}>
					see more <FontAwesomeIcon icon={faArrowRight} size="sm" />
				</div>
			</div>
			<div className={classes.profileLike}>
				<div className="container">
					<div className={classes.profileWrap}>
						<div className={classes.userLogged}>
							<div className={classes.userImg}>
								<Image className={classes.profileImg} src={Profile} width={48} height={48} alt="Profile Image" />
							</div>
							<div className={classes.userInfo}>
								<h4>@Deekaykwon</h4>
								<div className={classes.textMini}>view profile <FontAwesomeIcon icon={faArrowRight} size="lg" /></div>
							</div>
						</div>
						<div className={classes.likesCount}>
							<span className="d-block"><FontAwesomeIcon icon={faHeart} size="lg" /></span>
							99K
						</div>
					</div>
				</div>
			</div>

			<div className={classes.footer}>
				<div className="container">
					<div className={classes.copyright}>Powered by NFTIFY <Image src={downArrow} alt='Down Logo' width={50} height={30} /> </div>
				</div>
			</div>
		</>
  );
}

