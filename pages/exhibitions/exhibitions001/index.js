import React from 'react';
import Link from 'next/link';
import Image from "next/image";

import MyAccountLefftSidebar from '../../../components/account/lefftsidebar';
import ThumbList from '../../../components/exhibitions/exhibitions001/thumblist';
import paging from '../../../public/exhibitions/exhibitions001/pagination.module.scss';

import style from '../../../public/exhibitions/exhibitions001/index.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faArrowRightFromBracket,faThLarge  } from '@fortawesome/free-solid-svg-icons';

const exhibitions = () => {
  return (

    <div className='userWrap'>
      <div className='container py-3'>
        <h1>Header</h1>
      </div>		  
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
              <MyAccountLefftSidebar/>
          </div>
          <div className='col-md-9'>

            <div className={style.titleWrapCreate}>
              <div className={style.titleWrap}>
                  <h1 className={style.title}>My Exhibitions</h1>
                  <p>Personalise your profile’s colour, background, and theme.</p>
              </div>
              <Link href="/exhibitions/exhibitions001/create">
                <a className={`btn btn-default` + ' ' + style.createClink}>                      
                <FontAwesomeIcon icon={faThLarge} className="faThLarge" size="lg" /> Create New Exhibition</a></Link>

            </div>

            <ThumbList />

            <ul className={`pagination justify-content-end`+ ' ' + paging.pagination}>
              <li className={`page-item`+ ' ' + paging.disabled} ><a className="page-link" href="#">Previous</a></li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><span className="page-link"> .. </span></li>
              <li className="page-item"><a className="page-link" href="#">10</a></li>
              <li className="page-item"><a className="page-link" href="#">11</a></li>
              <li className="page-item"><a className={`page-link`+ ' ' + paging.active} href="#">12</a></li>
              <li className="page-item"><a className="page-link" href="#">16</a></li>
              <li className="page-item"><span className="page-link"> .. </span></li>
              <li className="page-item"><a className="page-link" href="#">26</a></li>
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
}

export default exhibitions;