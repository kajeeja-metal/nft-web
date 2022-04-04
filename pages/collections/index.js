
import Link from 'next/link';
import Image from "next/image";
import React, { useEffect } from "react";
import profileLogo from '../../public/account/images/profile.png';
import classes from '../../public/account/index.module.scss';
import nav from '../../public/collections/tabnav.module.scss';
import style from '../../public/collections/index.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleLeft, faArrowRightFromBracket,faThLarge, faCheck, faClone } from '@fortawesome/free-solid-svg-icons';

import MyAccountLefftSidebar from '../../components/account/lefftsidebar';
import ThumbList from '../../components/collections/thumblist';


export default function Index() {
	useEffect(() => {
        if (typeof document !== undefined) {
          require("bootstrap/dist/js/bootstrap");
        }
    }, []);

    useEffect(() => {
        document.querySelector("body").classList.add("collectionpage");
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
                    <MyAccountLefftSidebar/>
				</div>
				<div className='col-md-9'>
                    <div className={style.titleWrap}>
                        <h1 className={style.title}>My Collections</h1>
                        <p>Personalise your profile’s colour, background, and theme.</p>
                    </div>

                    <div className={style.navCreateWrap}>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className={nav.navLink + ' ' + nav.active} data-bs-toggle="tab" href="#allAssetTab">All Asserts</a>
                            </li>
                            <li className="nav-item">
                                <a className={nav.navLink} data-bs-toggle="tab" href="#publishTab">Published</a>
                            </li>
                            <li className="nav-item">
                                <a className={nav.navLink} data-bs-toggle="tab" href="#unpublishTab">Unpublished</a>
                            </li>
                            <li className="nav-item">
                                <a className={nav.navLink} data-bs-toggle="tab" href="#draftTab">Draft</a>
                            </li>
                        </ul>
                        <Link href="/collections/create">
                        <a className={style.createClink + ' ' + style.btn}>                      
                        <FontAwesomeIcon icon={faThLarge} className="faThLarge" size="lg" /> Create New Colllection</a></Link> 
                    </div>

                       
                    <div className="tab-content">
                        <div className="tab-pane show active" id="allAssetTab">
                            <ThumbList />
                        </div>
                        <div className="tab-pane fade" id="publishTab">
                            <h1>Publish tab</h1>
                        </div>
                        <div className="tab-pane fade" id="unpublishTab">
                            <h1>Unpublish tab</h1>
                        </div>
                        <div className="tab-pane fade" id="draftTab">
                            <h1>Draft tab</h1>
                        </div>
                    </div>



				</div>
			</div>
		</div>
      </div>
    </>
  );
}
