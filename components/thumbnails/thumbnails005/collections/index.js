import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import classes from './Collections005.module.scss';

import Thumb from '../../../../public/profile/profile005/images/thumbcollection.png';
import Thumb2 from '../../../../public/profile/profile005/images/thumbcollection2.png';

export default function Collections005() {
	const settings = {
		dots: false,
		arrows:true,
		autoplay:true,
		lazyLoad: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true
    };
    return (
		<>
		<h2 className={classes.tabTitle}><span className={classes.tabTitleInner}>Collections</span></h2>
		<div className={classes.collectionWraps}>
			<Slider {...settings}>
				<div className={`thumblist` + ' ' + classes.thumblist}>
					<div className={classes.thumbImg}>
						<div className={classes.thumbImbBorder}>
						<Link className={classes.thumbsItem} href="#">
							<a>
							<Image
								src={Thumb}
								height={364} width={784}
								alt="Thumbs"
							/>
							</a>							
						</Link>
						</div>
						<div className={classes.wishLike}>
							<FontAwesomeIcon icon={faHeart} className="wishicon"/>
						</div>
					</div>
				</div>
				<div className={`thumblist` + ' ' + classes.thumblist}>
					<div className={classes.thumbImg}>
						<div className={classes.thumbImbBorder}>
						<Link className={classes.thumbsItem} href="#">
							<a>
							<Image
								src={Thumb2}
								height={364} width={784}
								alt="Thumbs"
							/>
							</a>							
						</Link>
						</div>
						<div className={classes.wishLike}>
							<FontAwesomeIcon icon={faHeart} className="wishicon"/>
						</div>
					</div>
				</div>
				<div className={`thumblist` + ' ' + classes.thumblist}>
					<div className={classes.thumbImg}>
						<div className={classes.thumbImbBorder}>
						<Link className={classes.thumbsItem} href="#">
							<a>
							<Image
								src={Thumb}
								height={364} width={784}
								alt="Thumbs"
							/>
							</a>							
						</Link>
						</div>
						<div className={classes.wishLike}>
							<FontAwesomeIcon icon={faHeart} className="wishicon"/>
						</div>
					</div>
				</div>
				<div className={`thumblist` + ' ' + classes.thumblist}>
					<div className={classes.thumbImg}>
						<div className={classes.thumbImbBorder}>
						<Link className={classes.thumbsItem} href="#">
							<a>
							<Image
								src={Thumb2}
								height={364} width={784}
								alt="Thumbs"
							/>
							</a>							
						</Link>
						</div>
						<div className={classes.wishLike}>
							<FontAwesomeIcon icon={faHeart} className="wishicon"/>
						</div>
					</div>
				</div>
				<div className={`thumblist` + ' ' + classes.thumblist}>
					<div className={classes.thumbImg}>
						<div className={classes.thumbImbBorder}>
						<Link className={classes.thumbsItem} href="#">
							<a>
							<Image
								src={Thumb}
								height={364} width={784}
								alt="Thumbs"
							/>
							</a>							
						</Link>
						</div>
						<div className={classes.wishLike}>
							<FontAwesomeIcon icon={faHeart} className="wishicon"/>
						</div>
					</div>
				</div>
				<div className={`thumblist` + ' ' + classes.thumblist}>
					<div className={classes.thumbImg}>
						<div className={classes.thumbImbBorder}>
						<Link className={classes.thumbsItem} href="#">
							<a>
							<Image
								src={Thumb2}
								height={364} width={784}
								alt="Thumbs"
							/>
							</a>							
						</Link>
						</div>
						<div className={classes.wishLike}>
							<FontAwesomeIcon icon={faHeart} className="wishicon"/>
						</div>
					</div>
				</div>
				<div className={`thumblist` + ' ' + classes.thumblist}>
					<div className={classes.thumbImg}>
						<div className={classes.thumbImbBorder}>
						<Link className={classes.thumbsItem} href="#">
							<a>
							<Image
								src={Thumb}
								height={364} width={784}
								alt="Thumbs"
							/>
							</a>							
						</Link>
						</div>
						<div className={classes.wishLike}>
							<FontAwesomeIcon icon={faHeart} className="wishicon"/>
						</div>
					</div>
				</div>
				<div className={`thumblist` + ' ' + classes.thumblist}>
					<div className={classes.thumbImg}>
						<div className={classes.thumbImbBorder}>
						<Link className={classes.thumbsItem} href="#">
							<a>
							<Image
								src={Thumb2}
								height={364} width={784}
								alt="Thumbs"
							/>
							</a>							
						</Link>
						</div>
						<div className={classes.wishLike}>
							<FontAwesomeIcon icon={faHeart} className="wishicon"/>
						</div>
					</div>
				</div>
			</Slider>
			
        </div>
		</>
  );
}

