import HeaderAccount from '@/components/account/layout/header';
import FooterAccount from '@/components/account/layout/footer';
import React from 'react';

const PageAuth = (props) => {
  return (
    <>
		<HeaderAccount route={props.route} />
        	{props.children}
		<FooterAccount route={props.route}/>
    </>
  );
}

export default PageAuth;