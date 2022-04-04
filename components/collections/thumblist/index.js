import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from './ThumbList.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-regular-svg-icons';


import Thumbs from '../../../public/collections/thumblist/images/thumblist.png';
import Thumbs2 from '../../../public/collections/thumblist/images/thumblist2.png';
import Thumbs3 from '../../../public/collections/thumblist/images/thumblist3.png';
import Thumbs4 from '../../../public/collections/thumblist/images/thumblist4.png';

//library.add(faClone, faImage);



export default function ThumbList() {
      return (
		<>
		<div className="row">
			<div className="col-6">
				<div className={classes.thumblist}>
					<div className={classes.thumbImg}>
						<Link className={classes.thumbsItem} href="/">
							<a>
							<Image
								src={Thumbs}
								height={513}
								width={513}
								alt="Thumbs"
							/>
							<div className={classes.status}>
								<span className={classes.lbl}>Publish</span>
								<label className={classes.circle + ' ' +classes.publish}></label>
							</div>
							</a>							
						</Link>
					</div>
					<div className={classes.thumbInfo}>
						<div className={classes.thumbTitlewrap}>
							<h3>
							<Link href="/"><a>Collection Name</a></Link>
							</h3>
							<div className={classes.assetNum}>32 Assets</div>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie maecenas dui condimentum vitae, integer leo, eget tortor. Faucibus...</p>
						<div className={classes.dateWish}>
							<span className={classes.date} >Last Updated: 12/12/22</span>
							<div className={classes.wish}>
								<span className={classes.num}>100 </span>
								<FontAwesomeIcon icon={faHeart} className="wishicon"/> 
								
							</div>
						</div>	
					</div>
				</div>
			</div>
			<div className="col-6">
				<div className={classes.thumblist}>
					<div className={classes.thumbImg}>
						<Link className={classes.thumbsItem} href="/">
							<a>
							<Image
								src={Thumbs2}
								height={513}
								width={513}
								alt="Thumbs"
							/>
							<div className={classes.status}>
								<span className={classes.lbl}>Unpublish</span>
								<label className={classes.circle + ' ' +classes.unpublish}></label>
							</div>
							</a>							
						</Link>
					</div>
					<div className={classes.thumbInfo}>
						<div className={classes.thumbTitlewrap}>
							<h3>
							<Link href="/"><a>Collection Name (Draft)</a></Link>
							</h3>
							<div className={classes.assetNum}>32 Assets</div>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie maecenas dui condimentum vitae, integer leo, eget tortor. Faucibus...</p>
						<div className={classes.dateWish}>
							<span className={classes.date} >Last Updated: 12/12/22</span>
							<div className={classes.wish}>
								<span className={classes.num}>100 </span>
								<FontAwesomeIcon icon={faHeart} className="wishicon"/> 
								
							</div>
						</div>	
					</div>
				</div>
			</div>
			<div className="col-6">
				<div className={classes.thumblist}>
					<div className={classes.thumbImg}>
						<Link className={classes.thumbsItem} href="/">
							<a>
							<Image
								src={Thumbs3}
								height={513}
								width={513}
								alt="Thumbs"
							/>
							<div className={classes.status}>
								<span className={classes.lbl}>Draft</span>
								<label className={classes.circle + ' ' +classes.draft}></label>
							</div>
							</a>							
						</Link>
					</div>
					<div className={classes.thumbInfo}>
						<div className={classes.thumbTitlewrap}>
							<h3>
							<Link href="/"><a>Collection Name</a></Link>
							</h3>
							<div className={classes.assetNum}>32 Assets</div>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie maecenas dui condimentum vitae, integer leo, eget tortor. Faucibus...</p>
						<div className={classes.dateWish}>
							<span className={classes.date} >Last Updated: 12/12/22</span>
							<div className={classes.wish}>
								<span className={classes.num}>100 </span>
								<FontAwesomeIcon icon={faHeart} className="wishicon"/> 
								
							</div>
						</div>	
					</div>
				</div>
			</div>
			<div className="col-6">
				<div className={classes.thumblist}>
					<div className={classes.thumbImg}>
						<Link className={classes.thumbsItem} href="/">
							<a>
							<Image
								src={Thumbs4}
								height={513}
								width={513}
								alt="Thumbs"
							/>
							<div className={classes.status}>
								<span className={classes.lbl}>Unpublish</span>
								<label className={classes.circle + ' ' +classes.unpublish}></label>
							</div>
							</a>							
						</Link>
					</div>
					<div className={classes.thumbInfo}>
						<div className={classes.thumbTitlewrap}>
							<h3>
							<Link href="/"><a>Collection Name</a></Link>
							</h3>
							<div className={classes.assetNum}>32 Assets</div>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie maecenas dui condimentum vitae, integer leo, eget tortor. Faucibus...</p>
						<div className={classes.dateWish}>
							<span className={classes.date} >Last Updated: 12/12/22</span>
							<div className={classes.wish}>
								<span className={classes.num}>100 </span>
								<FontAwesomeIcon icon={faHeart} className="wishicon" /> 
								
							</div>
						</div>	
					</div>
				</div>
			</div>
			
			</div>
		</>
  );
}

