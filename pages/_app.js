import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../public/global.scss';
import PageMain from '../layout/PageMain'


function MyApp({ Component, pageProps }) {

  	return (
	  	<>
			<PageMain>
				<Component {...pageProps} />
			</PageMain>
		</>
	) 
}

export default MyApp
