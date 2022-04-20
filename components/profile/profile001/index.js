import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Image from "next/image";
import Link from "next/link";

import classes from './Profile001.module.scss';
import 'react-tabs/style/react-tabs.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone, faImage, faFlag } from "@fortawesome/free-regular-svg-icons";
import downArrow from '../../../public/profile/profile001/images/down-arrow.svg';
import Thumbs001 from "../../../components/thumbnails/thumbnails001"; 
// Layout Format

// Images Included need to remove Later
import profileBG from '../../../public/profile/profile001/images/profilebg.png';
import profileLogo from '../../../public/profile/profile001/images/profile.png';


library.add(faClone, faImage, faFlag);

import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";



export default function Profile001() {
	
	const [isCopied, setIsCopied] = useState(false);
	const onCopyText = () => {
		setIsCopied(true);
		setTimeout(() => {
		setIsCopied(false);
		}, 1000);
	};
	const codeSnitted = `0xceB945...Bd3c8D5D`;
  return (
	<>
        <div className={classes.bannerWrap}>
          <div className={classes.bannerImg}>
            <Image
              src={profileBG}
              alt="Banner Image"
              width={2000}
              height={360}
            />
			<div className={classes.walletConnect}>
				<button type="button" className="btn btn-success btn-lg">Connect Wallet</button>
			</div>
          </div>
          <div className={classes.userWrap}>
            <Image
              className={classes.profilePicture}
              src={profileLogo}
              height={250}
              width={250}
              alt="Thumbs"
            />
            <div className={classes.userInfo}>
              <h1 className={classes.userName}>Deekay Kwon 💎</h1>
              <h2 className={classes.userMore}>@Deekaykwon</h2>
              <div className={classes.userId}>
			 
                <CopyToClipboard text={codeSnitted} onCopy={onCopyText}>
                  <div className={classes.copyWrap}>
                    {codeSnitted}
                    <span className={classes.copyTxt}>
                      {isCopied ? (
                        <span>Copied!</span>
                      ) : (
                        <FontAwesomeIcon icon={faClone} />
                      )}
                    </span>
                  </div>
                </CopyToClipboard>
              </div>
              <p className={classes.statusWrap}>
                <span>99 <span>Collections</span></span>
                <span>99 <span>Collection Likes</span></span>
                <span>99K <span>Exhibitions</span></span>
                <span>99K <span>Likes</span></span>
              </p>
              <p className={classes.userDesc}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                dvvindustry. Lorem Ipsum is simply dummy text of the printing
                and typesetting dvvindustry. Lorem Ipsum has been dummy text of
                the printing and typesetting dvvindustry. Lorem Ipsum has been
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
            </div>
          </div>
        </div>
        <Thumbs001 />
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
  )
}