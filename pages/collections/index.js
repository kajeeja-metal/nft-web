import Link from 'next/link';
import React, { useEffect } from "react";
import PagesAuth from '@/layout/PageAuth';
import LeftSidebar from '../../components/account/layout/leftsidebar.js';
import ThumbList from '../../components/collections/thumblist';

import button from '../../public/account/Buttons.module.scss';
import nav from '../../public/collections/tabnav.module.scss';
import style from '../../public/collections/index.module.scss';

//import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge  } from '@fortawesome/free-solid-svg-icons';


export default function Index(props) {
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
    <PagesAuth route={props.user}>
      <div className='userWrap'>
		<div className='container'>
			<div className='row'>
                <div className='col-md-3'>
                    <LeftSidebar/>
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
                        <a className={`btn ${button.btnOutlinePrimary + ' ' + style.createClink}`}>                      
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
    </PagesAuth>
 
    </>
  );
}
