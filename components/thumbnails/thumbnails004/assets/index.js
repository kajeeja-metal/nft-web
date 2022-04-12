import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import classes from './Assets002.module.scss';

import Thumb from '../../../../public/profile/profile004/images/asset-thumb.png';
import Thumb2 from '../../../../public/profile/profile004/images/asset-thumb2.png';
import Thumb3 from '../../../../public/profile/profile004/images/asset-thumb3.png';
import Thumb4 from '../../../../public/profile/profile004/images/asset-thumb4.png';

export default function Assets002() {
      return (
		<>
			<div className={classes.assetsAll}>
				<div className={classes.thumblist}>					
					<div className={classes.thumbInfo}>            
						<div className={classes.thumbTitlewrap}>
							<h3>
							<Link href="/"><a>NFT Name</a></Link>
							</h3>							
						</div>
						<p className={classes.thumbDesc}>Lorem ipsum dolor sit amet, consectetur ist at...</p>		
					</div>
					<div className={classes.thumbImg}>
						<Link className={classes.thumbsItem} href="#">
							<a>
							<Image
								src={Thumb}
								height={240}
								width={240}
								alt="Thumbs"
							/>
							<span className={classes.playIconColor}>
							<FontAwesomeIcon icon={faPlayCircle } className="faPlayCircle"/></span>
							</a>							
						</Link>
					</div>
				</div>
				<div className={classes.thumblist}>					
					<div className={classes.thumbInfo}>            
						<div className={classes.thumbTitlewrap}>
							<h3>
							<Link href="/"><a>NFT Name</a></Link>
							</h3>							
						</div>
						<p className={classes.thumbDesc}>Lorem ipsum dolor sit amet, consectetur ist at...</p>		
					</div>
					<div className={classes.thumbImg}>
						<Link className={classes.thumbsItem} href="#">
							<a>
							<Image
								src={Thumb2}
								height={240}
								width={240}
								alt="Thumbs"
							/>
							<span className={classes.playIconColor}>
							<FontAwesomeIcon icon={faPlayCircle } className="faPlayCircle"/></span>
							</a>							
						</Link>
					</div>
				</div>
				<div className={classes.thumblist}>					
					<div className={classes.thumbInfo}>            
						<div className={classes.thumbTitlewrap}>
							<h3>
							<Link href="/"><a>NFT Name</a></Link>
							</h3>							
						</div>
						<p className={classes.thumbDesc}>Lorem ipsum dolor sit amet, consectetur ist at...</p>		
					</div>
					<div className={classes.thumbImg}>
						<Link className={classes.thumbsItem} href="#">
							<a>
							<Image
								src={Thumb3}
								height={240}
								width={240}
								alt="Thumbs"
							/>
							<span className={classes.playIconColor}>
							<FontAwesomeIcon icon={faPlayCircle } className="faPlayCircle"/></span>
							</a>							
						</Link>
					</div>
				</div>
				<div className={classes.thumblist}>					
					<div className={classes.thumbInfo}>            
						<div className={classes.thumbTitlewrap}>
							<h3>
							<Link href="/"><a>NFT Name</a></Link>
							</h3>							
						</div>
						<p className={classes.thumbDesc}>Lorem ipsum dolor sit amet, consectetur ist at...</p>		
					</div>
					<div className={classes.thumbImg}>
						<Link className={classes.thumbsItem} href="#">
							<a>
							<Image
								src={Thumb4}
								height={240}
								width={240}
								alt="Thumbs"
							/>
							<span className={classes.playIconColor}>
							<FontAwesomeIcon icon={faPlayCircle } className="faPlayCircle"/></span>
							</a>							
						</Link>
					</div>
				</div>
				<div className={classes.thumblist}>					
					<div className={classes.thumbInfo}>            
						<div className={classes.thumbTitlewrap}>
							<h3>
							<Link href="/"><a>NFT Name</a></Link>
							</h3>							
						</div>
						<p className={classes.thumbDesc}>Lorem ipsum dolor sit amet, consectetur ist at...</p>		
					</div>
					<div className={classes.thumbImg}>
						<Link className={classes.thumbsItem} href="#">
							<a>
							<Image
								src={Thumb}
								height={240}
								width={240}
								alt="Thumbs"
							/>
							<span className={classes.playIconColor}>
							<FontAwesomeIcon icon={faPlayCircle } className="faPlayCircle"/></span>
							</a>							
						</Link>
					</div>
				</div>
				<div className={classes.thumblist}>					
					<div className={classes.thumbInfo}>            
						<div className={classes.thumbTitlewrap}>
							<h3>
							<Link href="/"><a>NFT Name</a></Link>
							</h3>							
						</div>
						<p className={classes.thumbDesc}>Lorem ipsum dolor sit amet, consectetur ist at...</p>		
					</div>
					<div className={classes.thumbImg}>
						<Link className={classes.thumbsItem} href="#">
							<a>
							<Image
								src={Thumb2}
								height={240}
								width={240}
								alt="Thumbs"
							/>
							<span className={classes.playIconColor}>
							<FontAwesomeIcon icon={faPlayCircle } className="faPlayCircle"/></span>
							</a>							
						</Link>
					</div>
				</div>
				<div className={classes.thumblist}>					
					<div className={classes.thumbInfo}>            
						<div className={classes.thumbTitlewrap}>
							<h3>
							<Link href="/"><a>NFT Name</a></Link>
							</h3>							
						</div>
						<p className={classes.thumbDesc}>Lorem ipsum dolor sit amet, consectetur ist at...</p>		
					</div>
					<div className={classes.thumbImg}>
						<Link className={classes.thumbsItem} href="#">
							<a>
							<Image
								src={Thumb3}
								height={240}
								width={240}
								alt="Thumbs"
							/>
							<span className={classes.playIconColor}>
							<FontAwesomeIcon icon={faPlayCircle } className="faPlayCircle"/></span>
							</a>							
						</Link>
					</div>
				</div>
				<div className={classes.thumblist}>					
					<div className={classes.thumbInfo}>            
						<div className={classes.thumbTitlewrap}>
							<h3>
							<Link href="/"><a>NFT Name</a></Link>
							</h3>							
						</div>
						<p className={classes.thumbDesc}>Lorem ipsum dolor sit amet, consectetur ist at...</p>		
					</div>
					<div className={classes.thumbImg}>
						<Link className={classes.thumbsItem} href="#">
							<a>
							<Image
								src={Thumb4}
								height={240}
								width={240}
								alt="Thumbs"
							/>
							<span className={classes.playIconColor}>
							<FontAwesomeIcon icon={faPlayCircle } className="faPlayCircle"/></span>
							</a>							
						</Link>
					</div>
				</div>
			</div>
		</>
  );
}

