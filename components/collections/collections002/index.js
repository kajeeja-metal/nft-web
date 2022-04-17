import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from './Collection002.module.scss';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Thumbs from '../../../public/dummyassets/thumbs.png';
import Profile from '../../../public/dummyassets/profile.png';
import downArrow from '../../../public/dummyassets/down-arrow.svg';

import { faShareNodes, faArrowRight, faLink, faPen } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
library.add( faArrowRight, faShareNodes, faHeart, faTwitter, faFacebook, faLink, faPen);


export default function Collection002() {
    useEffect(() => {
        document.querySelector("body").classList.add("collection002");
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
						<div className={classes.headSocial}>Share: <FontAwesomeIcon icon={faTwitter} size="lg" /> <FontAwesomeIcon icon={faFacebook} size="lg" /> <FontAwesomeIcon icon={faLink} size="lg" /></div>
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
						<h3 className={classes.ItemTitle}>Lonely Deekay</h3>
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
						<h3 className={classes.ItemTitle}>Titles</h3>
						<p className={classes.ItemDesc}>Thumbs Descriptions</p>
					</div>
					</article>
				</div>
				<div className={classes.paginationWrap}>
					<ul>
						<li className={classes.active}><Link href="/" ><a>1</a></Link></li>
						<li><Link href="/" ><a>...</a></Link></li>
						<li><Link href="/" ><a>10</a></Link></li>
						<li><Link href="/" ><a>11</a></Link></li>
						<li><Link href="/" ><a>...</a></Link></li>
						<li><Link href="/" ><a>26</a></Link></li>
						<li><Link href="/" ><a>Next</a></Link></li>
					</ul>
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
								<div className={classes.textMini}><Link href="/"><a>view profile <FontAwesomeIcon icon={faArrowRight} size="1x" /></a></Link></div>
							</div>
						</div>
						<div className={classes.likesCount}>
							<span className="d-block"><FontAwesomeIcon icon={faHeart} size="lg" /></span>
							99K
						</div>
					</div>
				</div>
			</div>
			<div className={classes.fixIcons}>
				<span><button type="button" className={`btn w-100 ${classes.btnIcons}`}><FontAwesomeIcon icon={faPen} size="lg" /></button></span>
			</div>
			
			<div className={classes.footer}>
				<div className="container">
					<div className={classes.copyright}>Copyright 2022 ©username. All rights reserved. | Powered by <Image src={downArrow} alt='Down Logo' width={50} height={30} /> NFTIFY</div>
				</div>
			</div>
		</>
  );
}

