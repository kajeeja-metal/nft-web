import Link from 'next/link';
import Image from "next/image";
import React, { useEffect } from "react";
import profileLogo from '../../public/account/images/profile.png';
import classes from '../../public/account/index.module.scss';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faArrowRightFromBracket, faCheck, faClone } from '@fortawesome/free-solid-svg-icons';
library.add(faCheck, faClone, faAngleLeft, faArrowRightFromBracket);

import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";


export default function Index() {
	useEffect(() => {
		document.querySelector("body").classList.add("userBg");
	});
  return ( 
    <>
      <div className='userWrap'>
		  <div className={classes.userHeaderWrap}>
			  <div className='container'>
					<div className={classes.userHeader}>
						<div className={classes.headerLeft}>
							<button type='button' className='btn btn-icons'><FontAwesomeIcon icon={faAngleLeft} size="lg" /></button>
							<span>Setting</span>
						</div>
						<div className={classes.headerRight}>
							<div className={classes.userLogged}>
								<div className={classes.userImg}>
									<Image className={classes.profileImg} src={profileLogo} width={48} height={48} alt="Profile Image" />
								</div>
								<div className={classes.userInfo}>
									<h4>Jenny Wilson</h4>
									<div className='text-mini'>@JennyWilson</div>
								</div>
							</div>
							<button type='button' className='btn btn-icons'><FontAwesomeIcon icon={faArrowRightFromBracket} size="lg" /></button>
						</div>
					</div>
			  </div>
		  </div>
		<div className='container'>
			<div className='row'>
				<div className='col-md-3'>
					<h3 className={classes.menuHead}>General</h3>
					<ul className={classes.menuWrap}>
						<li className={classes.menuItem}><Link href="/"><a>My Account</a></Link></li>
						<li className={classes.menuItem}><Link href="/"><a>My Assets</a></Link></li>
						<li className={classes.menuItem}><Link href="/"><a>My Collections</a></Link></li>
						<li className={classes.menuItem}><Link href="/"><a>My Exhibitons</a></Link></li>
					</ul>
					<h3 className={classes.menuHead}>Personalize your theme</h3>
					<ul className={classes.menuWrap}>
						<li className={classes.menuItem}><Link href="/"><a>Profile Template</a></Link></li>
						<li className={classes.menuItem}><Link href="/"><a>Typography</a></Link></li>
					</ul>
				</div>
				<div className='col-md-6'>
					<h3 className={classes.accHead}>My Account</h3>
					<div className="mb-3 row">
						<label className="col-sm-4 col-form-label">Profile Image</label>
						<div className="col-sm-8">
							<div className={classes.profileImgWrap}>
								<Image className={classes.profileImg} src={profileLogo} width={128} height={128} alt="Profile Image" />
								<div className={classes.fileupload}>
									<input type="file" />
									<span className={classes.btnBorder}>Upload</span>
									<div className={classes.uploadText}>Image should be......(spec)</div>
								</div>
							</div>
						</div>
					</div>
					<div className="mb-3 row">
						<label className="col-sm-4 col-form-label">Display Name</label>
						<div className="col-sm-8">
							<input type="text" className="form-control" placeholder="Jenny Wilson" />
						</div>
					</div>
					<div className="mb-3 row align-items-center">
						<label className="col-sm-4 col-form-label">Username</label>
						<div className="col-sm-6">
							<div className="input-group flex-nowrap">
								<input type="text" className="form-control" placeholder="Username" />
								<span className="input-group-text"><FontAwesomeIcon icon={faCheck} className="checkTrue" size="lg" /></span>
							</div>
						</div>
						<div className="col-sm-2">
							<button type='button' className='btn btn-link'>Edit</button>
						</div>
					</div>
					<div className="mb-3 row">
						<label className="col-sm-4 col-form-label">Connected Wallet</label>
						<div className="col-sm-8">
							<div className="input-group flex-nowrap">
								<input type="text" className="form-control" placeholder="0xf7A81...613Ff" />
								<span className="input-group-text"><FontAwesomeIcon icon={faClone} className="faClone" size="lg" /></span>
							</div>
						</div>
					</div>
					<div className="mb-3 row">
						<label className="col-sm-4 col-form-label">Bio</label>
						<div className="col-sm-8">
							<textarea className='form-control text-end' placeholder='Tell your fans about your story...'></textarea>
							<div className={classes.charCount}>0/500</div>
							<div className='btnsWrap text-end'>
								<button type='button' className='btn btnBorder btn-lg'>Cancel</button>
								<button type='button' className='btn btn-primary btn-lg'>Save</button>
							</div>
						</div>
					</div>
					<hr />
					<h3 className={classes.accHead}>Connect with you</h3>
					<p className={classes.headDesc}>Add  your social networks to allow your fans to connect with you!</p>
					<div className="mb-3 row">
						<label className="col-sm-4 col-form-label"><FontAwesomeIcon icon={faFacebook} size="lg" /> <span className={classes.socialText}>Facebook</span></label>
						<div className="col-sm-8">
							<input type="password" className="form-control" placeholder='URL link' />
						</div>
					</div>
					<div className="mb-3 row">
						<label className="col-sm-4 col-form-label"><FontAwesomeIcon icon={faTwitter} size="lg" /> <span className={classes.socialText}>Twitter</span></label>
						<div className="col-sm-8">
							<input type="password" className="form-control" placeholder='URL link' />
						</div>
					</div>
					<div className="mb-3 row">
						<label className="col-sm-4 col-form-label"><FontAwesomeIcon icon={faInstagram} size="lg" /> <span className={classes.socialText}>Instragram</span></label>
						<div className="col-sm-8">
							<input type="password" className="form-control" placeholder='URL link' />
						</div>
					</div>
					<hr />
					<h3 className={classes.accHead}>Deactivate account</h3>
					<p className={classes.headDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<div className="btnGroup">
						<button type='button' className='btn btn-outline-danger btnDeactivate btn-lg'>Deactivate</button>
					</div>
				</div>
			</div>
		</div>
      </div>
    </>
  );
}
