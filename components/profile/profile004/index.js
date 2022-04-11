import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Image from "next/image";
import Link from "next/link";
import classes from "../../../public/profile/profile004/Index.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone, faImage, faFlag } from "@fortawesome/free-regular-svg-icons";
import Thumbs004 from "../../../components/thumbnails/thumbnails004";

import downArrow from '../../../public/profile/profile001/images/down-arrow.svg';

import profileBG from "../../../public/profile/profile002/images/profilebg.png";
import profileLogo from "../../../public/profile/profile002/images/profile.png";

library.add(faClone, faImage);

import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Profile002() {
  useEffect(() => {
    if (typeof document !== undefined) {
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);
  useEffect(() => {
    document.querySelector("body").classList.add("profile3");
  });
  const [isCopied, setIsCopied] = useState(false);
  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
  const codeSnitted = `0xceB945...Bd3c8D5D`;
  const[index,setIndex] = useState(0);
  return (
    <>
      <div className={classes.bannerWrap}>
        <div className={`d-none` + ' ' + classes.bannerImg}>
          <Image src={profileBG} alt="Banner Image" width={2000} height={360} />
          <div className={classes.walletConnect}>
            <button type="button" className="btn btn-success btn-lg">
              Connect Wallet
            </button>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className={classes.userWrap}>
                <div className={classes.profileImg}>
                  <Image
                  className={classes.profilePicture}
                  src={profileLogo}
                  height={311}
                  width={311}
                  alt="Thumbs"
                  />
                </div>
                <div className={classes.userInfo}>
                  <h1 className={classes.userName}>SoundMint</h1>
                  <h2 className={classes.userMore}>@username</h2>
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
                  <p className={classes.userDesc}>
                    SoundMint curated NFTs are generative music collectibles that combine generative visuals with generative music by pairing stems to visual layers; allowing ... 
                  </p>
                  <p className={classes.socialList}>
                    <Link href="/"><a>
                      <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </a>
                    </Link>
                    <Link href="/"><a>
                      <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>
                    </Link>
                    <Link href="/"><a>
                      <FontAwesomeIcon icon={faFacebook} size="lg" />
                    </a>
                    </Link>
                  </p>
                  <div className={classes.likeWrap }>
                    <p className={classes.statusWrap}>
                      <span><span className={classes.num}>400</span> Collection Likes</span>
                      <span><span className={classes.num}>400</span> Exhibition Likes</span>
                      {/* <span><span className={classes.num}>99K</span> Likes</span> */}
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="nav flex-column" role="tablist"
                aria-orientation="vertical">
                <button onClick={()=>{setIndex(0)}} 
                  className={`nav-link ${index===0?'active':''}`}
                  data-bs-toggle="pill"
                  data-bs-target="#collectionWrap"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                 99 Collections
                </button>
                <button onClick={()=>{setIndex(1)}} className={`nav-link ${index===1?'active':''}`}
                  data-bs-toggle="pill"
                  data-bs-target="#spacesWrap"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                 99 Exhibitions
                </button>
                <button onClick={()=>{setIndex(2)}}
                  className={`nav-link ${index===2?'active':''}`}
                  data-bs-toggle="pill"
                  data-bs-target="#assetsAll"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                 99 All Assets
                </button>
              </div>
            </div>
            <div className="col-sm-7 offset-md-1">
				      <Thumbs004 />
            </div>
          </div>
        </div>
      </div>


	  <footer className={classes.footer}>
			<div className='container'>
				<div className={classes.footerRow}>
					<div className={classes.copyright}>Powered by NFTIFY <Image src={downArrow} alt='Down Logo' width={50} height={30} /> </div>
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
