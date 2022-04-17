import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Image from "next/image";
import Link from "next/link";
import classes from "../../../public/profile/profile006/Index.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faClone, faImage, faFlag, faAngleDoubleDown,faAngleDoubleUp, faBars, faDiamond } from "@fortawesome/free-solid-svg-icons";
import Thumbs006 from "../../../components/thumbnails/thumbnails006";

import downArrow from '../../../public/profile/profile006/images/down-arrow.svg';
import profileLogo from "../../../public/profile/profile006/images/profile.png";
import bannerImg from "../../../public/profile/profile006/images/banner.png";

library.add(faClone, faImage);

import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Profile006() {
  useEffect(() => {
    if (typeof document !== undefined) {
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);
  useEffect(() => {
    document.querySelector("body").classList.add("profile6");
  });
  const [isCopied, setIsCopied] = useState(false);
  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
  const codeSnitted = `0xceB945...Bd3c8D5D`;
  const [show, setShow] = useState();

  return (
    <>
      <div className={`container` + ' ' + classes.container}>
        <div className={`row` + ' ' + classes.profileBanner}>
          <div className={`col-md-3` + ' ' + classes.userWrap}>
            <div className={classes.profileImg}>
              <Image
                className={classes.profilePicture}
                src={profileLogo}
                width={150} height={150}              
                alt="Thumbs"
              />
            </div>
            <div className={classes.userInfo}>
              <h1 className={classes.userName}>SoundMint</h1>
              <h2 className={classes.userMore}>@username</h2>
              <div className={classes.userId}>
                <CopyToClipboard text={codeSnitted} onCopy={onCopyText}>
                  <div className={classes.copyWrap}>
                  <span className={classes.copyIcon}><FontAwesomeIcon icon={faDiamond} /></span> 
                    {codeSnitted}                    
                    <span className={classes.copyTxt}>                      
                      {isCopied ? (
                        <span>0xcf9144523f1a...</span>
                      ) : (
                        <FontAwesomeIcon icon={faClone} />
                      )}
                    </span>
                  </div>
                </CopyToClipboard>
              </div>
              <p className={classes.userDesc}>
                SoundMint curated NFTs are generative music collectibles that combine generative visuals with generative music by pairing stems to visual layers; allowing ... 
              </p>
              <div className={classes.likeSocialWrap}>
                <div className={classes.likeWrap }>
                  <p className={classes.statusWrap}>
                    <span><span className={classes.num}>9.99k</span> Collection Likes</span>
                    <span><span className={classes.num}>9.99k</span> Exhibition Likes</span>
                    {/* <span><span className={classes.num}>99K</span> Likes</span> */}
                  </p>
                </div>
                <div className={classes.socialList}>
                  <Link href="#"><a>
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </a>
                  </Link>
                  <Link href="#"><a>
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                  </Link>
                  <Link href="#"><a>
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-md-9` + ' ' + classes.banner}>
            <div className={`` + ' ' + classes.bannerImg}>
              <Image src={bannerImg} alt="Banner Image" width={1192} height={500} />
            </div>
          </div>
        </div>
        <div className={classes.tabWrap}>
          <div className={`nav` + ' ' + classes.nav} 
            role="tablist"
            aria-orientation="vertical" >
     
              <a className={`nav-link active`} data-bs-toggle="pill" data-bs-target="#collectionWrap"
              aria-controls="v-pills-messages"
              role="tab" aria-selected="false"
              type="button">                  
              Collections (24)
              </a>
      
              <a className={`nav-link` } data-bs-toggle="pill"
              data-bs-target="#exhibitionWrap"
              aria-controls="v-pills-messages"
              role="tab" aria-selected="false" 
              type="button">
              Exhibitions (8)
              </a>

              <a className={`nav-link` }  data-bs-toggle="pill"
              data-bs-target="#assetsWrap"
              aria-controls="v-pills-messages"
              role="tab" aria-selected="true"                     
              type="button">
              All ASSETS (100)
              </a>
       
          </div>
        </div>

        <Thumbs006 />
      </div>


      

	  <footer className={classes.footer}>
			<div className='container'>
				<div className={classes.footerRow}>
					<div className={classes.copyright}>Copyright 2022 ©username. All rights reserved   | Powered by NFTIFY <Image src={downArrow} alt='Down Logo' width={50} height={30} /> </div>
					<ul className={classes.socialContainer}>
						<li>
							Joined:  November 2021
						</li>
						<li><FontAwesomeIcon icon={faFlag} size="lg" /> Report</li>
						<li>
							<span>Social Follow :</span>
							<Link href='/'><a>
								<FontAwesomeIcon icon={faTwitter} size="lg" />
							</a></Link>
						</li>
						<li>
							<Link href='/'><a>
								<FontAwesomeIcon icon={faFacebook} size="lg" />
							</a></Link>
						</li>
						<li>
							<Link href='/'><a>
								<FontAwesomeIcon icon={faInstagram} size="lg" />
							</a></Link>
						</li>
					</ul>

				</div>
			</div>
		</footer>
    </>
  );
}
