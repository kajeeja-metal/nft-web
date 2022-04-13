import React from 'react';
import Link from 'next/link';

import MyAccountLefftSidebar from '../../components/account/lefftsidebar';
import PagesAuth from '@/layout/PageAuth';
import button from '../../public/account/Buttons.module.scss';
import ThumbList from '../../components/exhibitions/thumblist';
import Pagination from '../../components/common/pagination.js';


import style from '../../public/exhibitions/index.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge  } from '@fortawesome/free-solid-svg-icons';


const exhibitions = (props) => {
  return (
    <PagesAuth route={props.user}>
      <div className='userWrap'>		  
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
                <Link href="/exhibitions/create">
                  <a className={`btn` + ' ' + style.createClink + ' ' + button.btnOutlinePrimary}>                      
                  <FontAwesomeIcon icon={faThLarge} className="faThLarge" size="lg" /> Create New Exhibition</a></Link>

              </div>

              <ThumbList />
              <Pagination />


            </div>
          </div>
        </div>
      </div>
    </PagesAuth>

  );
}

export default exhibitions;