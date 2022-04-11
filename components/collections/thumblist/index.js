import React from "react";
import Image from "next/image";
import Link from "next/link";
import thumbclass from './ThumbList.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import Thumbs from '../../../public/collections/images/thumblist.png';
import Thumbs2 from '../../../public/collections/images/thumblist2.png';
import Thumbs3 from '../../../public/collections/images/thumblist3.png';
import Thumbs4 from '../../../public/collections/images/thumblist4.png';

export default function ThumbList() {
      return (
		<>
		<div className="row">
			<div className="col-6">
				<div className={thumbclass.thumblist}>
					<div className={thumbclass.thumbImg}>
						<Link className={thumbclass.thumbsItem} href="/">
							<a>
							<Image
								src={Thumbs}
								height={513}
								width={513}
								alt="Thumbs"
							/>
							<div className={thumbclass.status}>
								<span className={thumbclass.lbl}>Publish</span>
								<label className={thumbclass.circle + ' ' +thumbclass.publish}></label>
							</div>
							</a>							
						</Link>
					</div>
					<div className={thumbclass.thumbInfo}>
						<div className={thumbclass.thumbTitlewrap}>
							<h3>
							<Link href="/"><a>Collection Name</a></Link>
							</h3>
							<div className={thumbclass.assetNum}>32 Assets</div>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie maecenas dui condimentum vitae, integer leo, eget tortor. Faucibus...</p>
						<div className={thumbclass.dateWish}>
							<span className={thumbclass.date} >Last Updated: 12/12/22</span>
							<div className={thumbclass.wish}>
								<span className={thumbclass.num}>100 </span>
								<FontAwesomeIcon icon={faHeart} className="wishicon"/> 
								
							</div>
						</div>	
					</div>
				</div>
			</div>
			<div className="col-6">
				<div className={thumbclass.thumblist}>
					<div className={thumbclass.thumbImg}>
						<Link className={thumbclass.thumbsItem} href="/">
							<a>
							<Image
								src={Thumbs2}
								height={513}
								width={513}
								alt="Thumbs"
							/>
							<div className={thumbclass.status}>
								<span className={thumbclass.lbl}>Publish</span>
								<label className={thumbclass.circle + ' ' +thumbclass.publish}></label>
							</div>
							</a>							
						</Link>
					</div>
					<div className={thumbclass.thumbInfo}>
						<div className={thumbclass.thumbTitlewrap}>
							<h3>
							<Link href="/"><a>Collection Name</a></Link>
							</h3>
							<div className={thumbclass.assetNum}>32 Assets</div>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie maecenas dui condimentum vitae, integer leo, eget tortor. Faucibus...</p>
						<div className={thumbclass.dateWish}>
							<span className={thumbclass.date} >Last Updated: 12/12/22</span>
							<div className={thumbclass.wish}>
								<span className={thumbclass.num}>100 </span>
								<FontAwesomeIcon icon={faHeart} className="wishicon"/> 
								
							</div>
						</div>	
					</div>
				</div>
			</div>
			<div className="col-6">
				<div className={thumbclass.thumblist}>
					<div className={thumbclass.thumbImg}>
						<Link className={thumbclass.thumbsItem} href="/">
							<a>
							<Image
								src={Thumbs3}
								height={513}
								width={513}
								alt="Thumbs"
							/>
							<div className={thumbclass.status}>
								<span className={thumbclass.lbl}>Publish</span>
								<label className={thumbclass.circle + ' ' +thumbclass.publish}></label>
							</div>
							</a>							
						</Link>
					</div>
					<div className={thumbclass.thumbInfo}>
						<div className={thumbclass.thumbTitlewrap}>
							<h3>
							<Link href="/"><a>Collection Name</a></Link>
							</h3>
							<div className={thumbclass.assetNum}>32 Assets</div>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie maecenas dui condimentum vitae, integer leo, eget tortor. Faucibus...</p>
						<div className={thumbclass.dateWish}>
							<span className={thumbclass.date} >Last Updated: 12/12/22</span>
							<div className={thumbclass.wish}>
								<span className={thumbclass.num}>100 </span>
								<FontAwesomeIcon icon={faHeart} className="wishicon"/> 
								
							</div>
						</div>	
					</div>
				</div>
			</div>
			<div className="col-6">
				<div className={thumbclass.thumblist}>
					<div className={thumbclass.thumbImg}>
						<Link className={thumbclass.thumbsItem} href="/">
							<a>
							<Image
								src={Thumbs4}
								height={513}
								width={513}
								alt="Thumbs"
							/>
							<div className={thumbclass.status}>
								<span className={thumbclass.lbl}>Publish</span>
								<label className={thumbclass.circle + ' ' +thumbclass.publish}></label>
							</div>
							</a>							
						</Link>
					</div>
					<div className={thumbclass.thumbInfo}>
						<div className={thumbclass.thumbTitlewrap}>
							<h3>
							<Link href="/"><a>Collection Name</a></Link>
							</h3>
							<div className={thumbclass.assetNum}>32 Assets</div>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie maecenas dui condimentum vitae, integer leo, eget tortor. Faucibus...</p>
						<div className={thumbclass.dateWish}>
							<span className={thumbclass.date} >Last Updated: 12/12/22</span>
							<div className={thumbclass.wish}>
								<span className={thumbclass.num}>100 </span>
								<FontAwesomeIcon icon={faHeart} className="wishicon"/> 
								
							</div>
						</div>	
					</div>
				</div>
			</div>
			
			</div>
		</>
  );
}

