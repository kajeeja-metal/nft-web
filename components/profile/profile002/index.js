import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Image from "next/image";
import Link from "next/link";
import classes from "../../../public/profile/profile002/Index.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone, faImage, faFlag } from "@fortawesome/free-regular-svg-icons";
import Thumbs002 from "../../../components/thumbnails/thumbnails002";

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
  return (
    <>
      <div className={classes.bannerWrap}>
        <div className={classes.bannerImg}>
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
                  <h1 className={classes.userName}>Little Monkey 🍌</h1>
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
				<div className={classes.likeWrap }>
					<p className={classes.statusWrap}>
						<span><span className={classes.num}>99</span> Collections</span>
						<span><span className={classes.num}>99</span> Spaces</span>
						<span><span className={classes.num}>99K</span> Likes</span>
					</p>
					<p className={classes.userDesc}>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting dvvindustry. Lorem Ipsum is simply dummy text of
						the printing and typesetting dvvindustry. Lorem Ipsum has
						been dummy text of the printing and typesetting dvvindustry.
						Lorem Ipsum has been
					</p>
				  </div>
                </div>
              </div>
              <div
                className="nav flex-column" role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active"
                  data-bs-toggle="pill"
                  data-bs-target="#collectionWrap"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                 99 Collections
                </button>
                <button
                  className="nav-link"
                  data-bs-toggle="pill"
                  data-bs-target="#spacesWrap"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                 99 Exhibitions
                </button>
                <button
                  className="nav-link"
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
				<Thumbs002 />
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
