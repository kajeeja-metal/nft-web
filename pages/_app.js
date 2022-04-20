
import 'bootstrap/dist/css/bootstrap.css';
import '../public/global.scss';
import '../public/style.scss';
import React, { useEffect, useState } from 'react'
import App from 'next/app'
import axios from 'axios'
import { AnimatePresence } from "framer-motion"
import { AuthProvider } from '@/context/useAuth'
import { Modal, Tabs, Tab } from 'react-bootstrap';
import Barcode from "react-barcode";
import QRCode from "react-qr-code";
import moment from 'moment'
import OtpInput from "react-otp-input";
import Error from 'next/error'
import appWithI18n from 'next-translate/appWithI18n'
import i18nConfig from '../i18n'
import cookies from 'next-cookies'

// import PageMain from '../layout/PageMain'
// import HeaderAccount from '../components/account/layout/header.js';
// import FooterAccount from '../components/account/layout/footer.js';

const MyApp = ({ Component, pageProps, router, user }) => {
	return (
		<AuthProvider>
		  <AnimatePresence exitBeforeEnter>
			<Component {...pageProps} key={router.route} route={router} user={user} />
		  </AnimatePresence>
		</AuthProvider>
	)
}
MyApp.getInitialProps = async (appContext) => {
	const appProps = await App.getInitialProps(appContext);
	const { ctx } = appContext;
	// axios.defaults.headers.Authorization = `Bearer ${cookies(ctx).token}`;
	axios.interceptors.request.use(
	  function(config) {
	  const token = cookies(ctx).token; 
	  if (token) {
		  config.headers["Authorization"] = 'Bearer ' + token;
	  }
	  return config;
	  },
	  function(error) {
	  return Promise.reject(error);
	  }
  );
	let referringURL;
		  let requestingURL;
	if (appContext.isServer) {
		referringURL = appContext.req.headers.referer;
		requestingURL = appContext.req.reqPath;
	} 
	return { ...appProps,referringURL,requestingURL }
  }

export default MyApp
