import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../public/global.scss';
import PageMain from '../layout/PageMain'
import HeaderAccount from '../components/account/layout/header.js';
import FooterAccount from '../components/account/layout/footer.js';

function MyApp({ Component, pageProps }) {

  	return (
	  	<>
			<PageMain>
				<HeaderAccount />
				<Component {...pageProps} />
				<FooterAccount />
			</PageMain>
		</>
	) 
}

export default MyApp
