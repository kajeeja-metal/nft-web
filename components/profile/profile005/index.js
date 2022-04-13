import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Image from "next/image";
import Link from "next/link";
import classes from "../../../public/profile/profile005/Index.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faClone, faImage, faFlag, faAngleDoubleDown,faAngleDoubleUp, faBars, faDiamond } from "@fortawesome/free-solid-svg-icons";
import Thumbs005 from "../../../components/thumbnails/thumbnails005";

import downArrow from '../../../public/profile/profile005/images/down-arrow.svg';
import profileLogo from "../../../public/profile/profile005/images/profile.png";

library.add(faClone, faImage);

import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Profile005() {
  useEffect(() => {
    if (typeof document !== undefined) {
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);
  useEffect(() => {
    document.querySelector("body").classList.add("profile5");
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
      <div className="container">
        <div className={classes.tabNavWrap}>
          <div className="dropdown">
              <span className={classes.tabToggleIcon} data-bs-toggle="dropdown">
                <FontAwesomeIcon icon={faBars } />
              </span>
              <div className={`dropdown-menu` + ' ' + classes.navDropdown}>
                <ul className="nav" role="tablist">             
                  <a data-bs-toggle="pill" data-bs-target="#collectionWrap"
                    aria-controls="v-pills-collection" role="tab" 
                    aria-selected="false"><span className={classes.navIcon}>
                    <FontAwesomeIcon icon={faDiamond } />
                    </span> 99 Collection</a>         
                  <a data-bs-toggle="pill" data-bs-target="#exhibitionWrap"
                    aria-controls="v-pills-exhibition" role="tab" 
                    aria-selected="false"><span className={classes.navIcon}>
                      <FontAwesomeIcon icon={faDiamond } />
                      </span> 99 Exhibition</a>           
                  <a data-bs-toggle="pill" data-bs-target="#assetsWrap"
                    aria-controls="v-pills-allAsset" role="tab" 
                    aria-selected="true"><span className={classes.navIcon}>
                    <FontAwesomeIcon icon={faDiamond } />
                    </span> 99 Assets</a>
                </ul>
              </div>
            </div>
            
            <div className="tab-content" >              
              <Thumbs005 />            
            </div>
        </div>
      </div>

	  <footer className={classes.footer}>
			<div className='container'>
        <div className={classes.footerFloat}>
          <div className={classes.textRight}>
            <span className={classes.backToTop} onClick={()=>setShow(!show)}>
              {
                !show &&
                <FontAwesomeIcon icon={faAngleDoubleUp} />
              }
              {
                show &&
                <FontAwesomeIcon icon={faAngleDoubleDown}  />
              }
            </span>
          </div>
          {
            show &&
            <div className={classes.userInfoWrap}>
              <div className={classes.profileImg}>
                <Image
                className={classes.profilePicture}
                src={profileLogo}
                height={255}
                width={255}
                alt="Thumbs"
                />
              </div>
              <div className={classes.userInfo}>
                <h1 className={classes.userName}>Squid Game 🏆</h1>
                <h2 className={classes.userMore}>@Squidgame</h2>
                <div className={classes.userId}>
                  <CopyToClipboard text={codeSnitted} onCopy={onCopyText}>
                    <div className={classes.copyWrap}>
                      {codeSnitted}
                      <span className={classes.copyTxt}>
                        {isCopied ? (
                          <span>0xcf9144523f1a...!</span>
                        ) : (
                          <FontAwesomeIcon icon={faClone} />
                        )}
                      </span>
                    </div>
                  </CopyToClipboard>
                </div>
                <p className={classes.socialList}>
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
                </p>
              </div>
              <p className={classes.userDesc}>
                SoundMint curated NFTs are generative music collectibles that combine generative visuals with generative music by pairing stems to visual layers; allowing ... 
              </p>
              <div className={classes.likeWrap }>
                <p className={classes.statusWrap}>
                  <span><span className={classes.num}>400</span> Collection Likes</span>
                  <span><span className={classes.num}>400</span> Exhibition Likes</span>
                  {/* <span><span className={classes.num}>99K</span> Likes</span> */}
                </p>                    
              </div>
            </div>
          }

        </div>
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
