import React from 'react';
import classes from './Thumbs001.module.scss';
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Collection001 from './collections';
import Exhibitions001 from './exhibitions';

import Assets001 from './assets';


const Thumbs001 = () => {
  return (
	<>
		<div className="container">
			<div className={classes.tabsWrapper}>
				<Tabs>
					<TabList>
						<Tab>Collections</Tab>
						<Tab>Spaces</Tab>
						<Tab>All Assets</Tab>
					</TabList>
					<TabPanel>
						<Exhibitions001/>
					</TabPanel>
					<TabPanel>
						<Collection001 />
					</TabPanel>
					<TabPanel>
						<Assets001 />
					</TabPanel>
				</Tabs>
			</div>
			<div className={classes.paginationWrap}>
				<ul>
					<li className={classes.active}><Link href="/" ><a>1</a></Link></li>
					<li><Link href="/" ><a>2</a></Link></li>
					<li><Link href="/" ><a>3</a></Link></li>
				</ul>
			</div>
      	</div>	
	</>
  );
}

export default Thumbs001;
