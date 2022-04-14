import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import classes from './Exhibitions006.module.scss';

import Thumb from '../../../../public/profile/profile006/images/thumbexhibition.png';
import Thumb2 from '../../../../public/profile/profile006/images/thumbexhibition2.png';


export default function Exhibitions006() {
  const settings = {
		dots: false,
    arrows:true,
    autoplay:true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
    {
        breakpoint: 1024,
        settings: {
        slidesToShow: 1,
        variableWidth: false,
        }
    }
    ]
  };
  return (
		<>
      <h2 className={classes.tabTitle}><span className={classes.tabTitleInner}>Exhibitions</span></h2>
			<div className={classes.exhibitionWraps}>
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
          </Slider>
      </div>
		</>
  );
}

