import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import paging from '@/components/thumbnails/thumbnails006/Thumbs006.module.scss';
import classes from './Assets006.module.scss';

import Thumb from '../../../../public/profile/profile006/images/thumb.png';
import Thumb2 from '../../../../public/profile/profile006/images/thumb2.png';
import Thumb3 from '../../../../public/profile/profile006/images/thumb3.png';
import Thumb4 from '../../../../public/profile/profile006/images/thumb4.png';
import Thumb5 from '../../../../public/profile/profile006/images/thumb5.png';

export default function Assets006() {
      return (
		<>	
			<h2 className={classes.tabTitle}><span className={classes.tabTitleInner}>ALL NFTS</span></h2>
			<div className={classes.assetsAll}>
			<div className={classes.thumblist}>
					<div className={classes.thumbImg}>
						<Link className={classes.thumbsItem} href="#">
						<a>
							<Image
							src={Thumb}
							width={256} height={256}							
							alt="Thumbs" />
						</a>							
						</Link>
					</div>
					<div className={classes.thumbInfo}>            
						<div className={classes.thumbTitlewrap}>
							<h3>
							<Link href="/"><a>3D Soft Curves</a></Link>
							</h3>							
						</div>
						<p className={classes.thumbDesc}>Current Bid</p>		
					</div>
				</div>
				<div className={classes.thumblist}>
					<div className={classes.thumbImg}>
						<Link className={classes.thumbsItem} href="#">
						<a>
							<Image
							src={Thumb2}
							width={256} height={256}							
							alt="Thumbs" />
						</a>							
						</Link>
					</div>
					<div className={classes.thumbInfo}>            
						<div className={classes.thumbTitlewrap}>
							<h3>
							<Link href="/"><a>3D Soft Curves</a></Link>
							</h3>							
						</div>
						<p className={classes.thumbDesc}>Current Bid</p>		
					</div>
				</div>
				<div className={classes.thumblist}>
					<div className={classes.thumbImg}>
						<Link className={classes.thumbsItem} href="#">
						<a>
							<Image
							src={Thumb3}
							width={256} height={256}							
							alt="Thumbs" />
						</a>							
						</Link>
					</div>
					<div className={classes.thumbInfo}>            
						<div className={classes.thumbTitlewrap}>
							<h3>
							<Link href="/"><a>3D Soft Curves</a></Link>
							</h3>							
						</div>
						<p className={classes.thumbDesc}>Current Bid</p>		
					</div>
				</div>
				<div className={classes.thumblist}>
					<div className={classes.thumbImg}>
						<Link className={classes.thumbsItem} href="#">
						<a>
							<Image
							src={Thumb4}
							width={256} height={256}							
							alt="Thumbs" />
						</a>							
						</Link>
					</div>
					<div className={classes.thumbInfo}>            
						<div className={classes.thumbTitlewrap}>
							<h3>
							<Link href="/"><a>3D Soft Curves</a></Link>
							</h3>							
						</div>
						<p className={classes.thumbDesc}>Current Bid</p>		
					</div>
				</div>
				<div className={classes.thumblist}>
					<div className={classes.thumbImg}>
						<Link className={classes.thumbsItem} href="#">
						<a>
							<Image
							src={Thumb5}
							width={256} height={256}							
							alt="Thumbs" />
						</a>							
						</Link>
					</div>
					<div className={classes.thumbInfo}>            
						<div className={classes.thumbTitlewrap}>
							<h3>
							<Link href="/"><a>3D Soft Curves</a></Link>
							</h3>							
						</div>
						<p className={classes.thumbDesc}>Current Bid</p>		
					</div>
				</div>
				<div className={classes.thumblist}>
					<div className={classes.thumbImg}>
						<Link className={classes.thumbsItem} href="#">
						<a>
							<Image
							src={Thumb}
							width={256} height={256}							
							alt="Thumbs" />
						</a>							
						</Link>
					</div>
					<div className={classes.thumbInfo}>            
						<div className={classes.thumbTitlewrap}>
							<h3>
							<Link href="/"><a>3D Soft Curves</a></Link>
							</h3>							
						</div>
						<p className={classes.thumbDesc}>Current Bid</p>		
					</div>
				</div>
				<div className={classes.thumblist}>
					<div className={classes.thumbImg}>
						<Link className={classes.thumbsItem} href="#">
						<a>
							<Image
							src={Thumb2}
							width={256} height={256}							
							alt="Thumbs" />
						</a>							
						</Link>
					</div>
					<div className={classes.thumbInfo}>            
						<div className={classes.thumbTitlewrap}>
							<h3>
							<Link href="/"><a>3D Soft Curves</a></Link>
							</h3>							
						</div>
						<p className={classes.thumbDesc}>Current Bid</p>		
					</div>
				</div>
				<div className={classes.thumblist}>
					<div className={classes.thumbImg}>
						<Link className={classes.thumbsItem} href="#">
						<a>
							<Image
							src={Thumb3}
							width={256} height={256}							
							alt="Thumbs" />
						</a>							
						</Link>
					</div>
					<div className={classes.thumbInfo}>            
						<div className={classes.thumbTitlewrap}>
							<h3>
							<Link href="/"><a>3D Soft Curves</a></Link>
							</h3>							
						</div>
						<p className={classes.thumbDesc}>Current Bid</p>		
					</div>
				</div>
				<div className={classes.thumblist}>
					<div className={classes.thumbImg}>
						<Link className={classes.thumbsItem} href="#">
						<a>
							<Image
							src={Thumb4}
							width={256} height={256}							
							alt="Thumbs" />
						</a>							
						</Link>
					</div>
					<div className={classes.thumbInfo}>            
						<div className={classes.thumbTitlewrap}>
							<h3>
							<Link href="/"><a>3D Soft Curves</a></Link>
							</h3>							
						</div>
						<p className={classes.thumbDesc}>Current Bid</p>		
					</div>
				</div>
				<div className={classes.thumblist}>
					<div className={classes.thumbImg}>
						<Link className={classes.thumbsItem} href="#">
						<a>
							<Image
							src={Thumb5}
							width={256} height={256}							
							alt="Thumbs" />
						</a>							
						</Link>
					</div>
					<div className={classes.thumbInfo}>            
						<div className={classes.thumbTitlewrap}>
							<h3>
							<Link href="/"><a>3D Soft Curves</a></Link>
							</h3>							
						</div>
						<p className={classes.thumbDesc}>Current Bid</p>		
					</div>
				</div>
			</div>

			<div className={paging.paginationWrap}>
				<ul>
					<li className={paging.active}><Link href="#" ><a>1</a></Link></li>
					<li><Link href="#" ><a>2</a></Link></li>
					<li><Link href="#" ><a>3</a></Link></li>
				</ul>
			</div>

		</>
  );
}

