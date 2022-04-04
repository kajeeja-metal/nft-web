import React from 'react';
import Image from "next/image";
import classes from './HeaderAccount.module.scss';

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
library.add(faAngleLeft, faArrowRightFromBracket);

import profileLogo from '../../../public/dummyassets/profile.png';

const HeaderAccount = () => {
  return (
    <>
        <div className={classes.userHeaderWrap}>
            <div className='container'>
                <div className={classes.userHeader}>
                    <div className={classes.headerLeft}>
                        <button type='button' className={`btn ${classes.btnBorder}`}><FontAwesomeIcon icon={faAngleLeft} size="lg" /></button>
                        <span>Setting</span>
                    </div>
                    <div className={classes.headerRight}>
                        <div className={classes.userLogged}>
                            <div className={classes.userImg}>
                                <Image className={classes.profileImg} src={profileLogo} width={48} height={48} alt="Profile Image" />
                            </div>
                            <div className={classes.userInfo}>
                                <h4 className={classes.userTitle}>Jenny Wilson</h4>
                                <div className={classes.userId}>0xf7A81...613Ff</div>
                            </div>
                        </div>
                        <button type='button' className={`btn ${classes.btnBorder}`}><FontAwesomeIcon icon={faArrowRightFromBracket} size="lg" /></button>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default HeaderAccount;
