import HeaderAccount from '@/components/account/layout/header';
import FooterAccount from '@/components/account/layout/footer';
import React, { useState, useEffect } from "react"

import dynamic from 'next/dynamic'
import Header from '@/components/header'
import Footer from "@/components/footer";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Router from 'next/router'
import Script from 'next/script'
import useTranslation from 'next-translate/useTranslation'
import { Modal } from 'react-bootstrap';
import Barcode from "react-barcode";
import QRCode from "react-qr-code";
import { useAuth } from "@/context/useAuth";

const PageAuth = (props) => {
  const useAuths = useAuth();
  const [state, setState] = useState({
      loading: false
  })
  const hoursMinSecs = { seconds: 900 };
  const Spinner = () => {
      const content = <div className="loading-pages">
          <svg
              width="80"
              height="80"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid"
          >
              <circle
                  cx="50"
                  cy="50"
                  fill="none"
                  stroke="#f0ad4e"
                  strokeWidth="10"
                  r="35"
                  strokeDasharray="164.93361431346415 56.97787143782138"
                  transform="rotate(275.845 50 50)"
              >
                  <animateTransform
                      attributeName="transform"
                      type="rotate"
                      calcMode="linear"
                      values="0 50 50;360 50 50"
                      keyTimes="0;1"
                      dur="1s"
                      begin="0s"
                      repeatCount="indefinite"
                  />
              </circle>
          </svg>
      </div>;
      return content
  }
  useEffect(() => {
      useAuths.loadUserFromCookies()
      Router.events.on('routeChangeStart', () => {
          setState({ isLoading: true });
          var body = document.body;
          body.classList.add("lockPage");
      });
      Router.events.on('routeChangeComplete', () => {
          setState({ isLoading: false });
          var body = document.body;
          
          body.classList.remove("lockPage");
      });

      Router.events.on('routeChangeError', () => {
          setState({ isLoading: false });
      });
  }, []);
  return (
    <>
     <NextSeo
                title={props.title}
                description={''}
                canonical={props.url}
                openGraph={{
                    url: props.url,
                    title: props.title,
                    description: props.description,
                    images: [{ url: props.images }],
                    site_name: "Jeerawut",
                }}
          />
        <HeaderAccount route={props.route} />
        {state.isLoading ? Spinner() : ''}
        <motion.div className={(state.isLoading ? 'loadingBlur' : '')} id="containerContent" initial="initial" animate="animate" exit={{ opacity: 0 }}>
                {props.children}
        </motion.div>
        <FooterAccount route={props.route}/>
		
    </>
  );
}

export default PageAuth;