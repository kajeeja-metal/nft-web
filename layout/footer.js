import React from 'react';
import Image from "next/image";
import classes from './FooterAccount.module.scss';
import downArrow from '../../../public/dummyassets/down-arrow.svg';


const FooterAccount = () => {
  return (
    <>
        <div className={classes.footer}>
			<div className="container">
			<div className={classes.copyright}>Powered by NFTIFY <Image src={downArrow} alt='Down Logo' width={50} height={30} /> </div>
			</div>
      	</div>
    </>
  );
}

export default FooterAccount;
