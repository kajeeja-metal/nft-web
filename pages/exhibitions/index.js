import React from 'react';
import Link from 'next/link';

import MyAccountLefftSidebar from '../../components/account/lefftsidebar';
import button from '../../public/account/Buttons.module.scss';
import ThumbList from '../../components/exhibitions/thumblist';
import Pagination from '../../components/common/pagination.js';


import style from '../../public/exhibitions/index.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge  } from '@fortawesome/free-solid-svg-icons';


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

  );
}

export default exhibitions;