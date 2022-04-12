import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import classes from './Exhibitions004.module.scss';

import Thumb from '../../../../public/profile/profile004/images/thumb.png';
import Thumb2 from '../../../../public/profile/profile004/images/thumb2.png';


export default function Exhibitions002() {
      return (
		<>
			<div className={classes.collectionWraps}>
        <div className={classes.thumblist}>
          <div className={classes.thumbImg}>
            <Link className={classes.thumbsItem} href="#">
              <a>
              <Image
                src={Thumb}
                height={513}
                width={513}
                alt="Thumbs"
              />
              </a>							
            </Link>
            <div className={classes.wishLike}>
              <FontAwesomeIcon icon={faHeart} className="wishicon"/>
            </div>
          </div>
          <div className={classes.thumbInfo}>            
            <div className={classes.thumbTitlewrap}>
              <h3>
              <Link href="/"><a>#3330</a></Link>
              </h3>	
              <div className={classes.assetNum}>32 Assets</div>						
            </div>
            <p className={classes.thumbDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl malesuada id et a sed nulla. Dignissim augue venenatis non sed quis urna ac integer.</p>
            <div className={classes.dateWish}>              
              <span className={classes.date} >Last Updated: 12/12/22</span>
              <div className={classes.wish}>
                <span className={classes.num}>100 </span>
                <FontAwesomeIcon icon={faHeart} className="wishicon"/>
              </div>						
            </div>		
          </div>
        </div>
        <div className={classes.thumblist}>
          <div className={classes.thumbImg}>
            <Link className={classes.thumbsItem} href="#">
              <a>
              <Image
                src={Thumb2}
                height={513}
                width={513}
                alt="Thumbs"
              />
              </a>							
            </Link>
            <div className={classes.wishLike}>
              <FontAwesomeIcon icon={faHeart} className="wishicon"/>
            </div>
          </div>
          <div className={classes.thumbInfo}>            
            <div className={classes.thumbTitlewrap}>
              <h3>
              <Link href="/"><a>Collection Name</a></Link>
              </h3>	
              <div className={classes.assetNum}>32 Assets</div>					
            </div>
            <p className={classes.thumbDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl malesuada id et a sed nulla. Dignissim augue venenatis non sed quis urna ac integer.</p>
            <div className={classes.dateWish}>              
              <span className={classes.date} >Last Updated: 12/12/22</span>
              <div className={classes.wish}>
                <span className={classes.num}>100 </span>
                <FontAwesomeIcon icon={faHeart} className="wishicon"/>
              </div>						
            </div>	
          </div>
        </div>
      </div>
		</>
  );
}

