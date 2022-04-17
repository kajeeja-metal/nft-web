import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from './Collection001.module.scss';

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Thumbs from '../../../public/collections/collections001/images/thumb.png';
import Profile from '../../../public/collections/collections001/images/profile.png';
import downArrow from '../../../public/collections/collections001/images/down-arrow.png';

import { faShareNodes, faArrowRight, faLink, faPen } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
library.add( faArrowRight, faShareNodes, faHeart, faTwitter, faFacebook, faLink, faPen);


export default function Collection001() {
    useEffect(() => {
        document.querySelector("body").classList.add("profileOne");
    });
	

	return (
		<>
			<div className={classes.collectionWrap}>
				<div className='container'>
					<div className={classes.collectionTop}>
					<div className={classes.headSocial}>
						<span className={classes.socialLabel}>Share:</span> 
						<Link  href="#">
							<a>
								<FontAwesomeIcon icon={faTwitter} size="lg" /> 
							</a>
						</Link>
						<Link  href="#">
							<a><FontAwesomeIcon icon={faFacebook} size="lg" /> </a>
						</Link>
						<Link  href="#">
							<a><FontAwesomeIcon icon={faLink} size="lg" /></a>
						</Link>
					</div>
					</div>
				</div>
			</div>
			<div className='container'>
				<div className="row">
					<div className="col-md-6 mx-auto pb-5">
						<div className={`text-center` + ' ' + classes.textCenter}>
							<div className={classes.headWrap}>
								<h1>Monkey in Sapce</h1>
								<h6>(100 Assets)</h6>
							</div>
							<p className={classes.userDesc}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie maecenas dui condimentum vitae, integer leo, eget tortor. Fauc ibus morbi fusce rutrum vestibulum pellentesque augue convallis hendrerit adipiscing. Mauris sed sed dignissim in vel egestas tri  tortor. Fauc ibus morbi fusce rutrum vestibulum pellentesque augue convallis hendrerit adipiscing. Mauris sed sed dignissim in vel egestas tris...
							</p>
						</div>
					</div>
				</div>
				<div className={classes.collectionAll}>
					<article className={classes.thumbList}>
						<div className={classes.thumbImg}>
							<Link className={classes.thumbsItem} href="/">
								<a>
								<Image
									src={Thumbs}
									height={512} width={512} 
									alt="Thumbs"
								/>
								</a>
							</Link>
						</div>
						<div className={classes.thumbInfo}>
							<h5 className={classes.thumbTitle}><Link href="#"><a>NFT Name</a></Link></h5>
							<p className={classes.thumbDesc}>
							Lorem ipsum dolor sit amet, consectetur ist at...
							</p>
							<div className={classes.chainName}>
							NFT Chain 
							</div>
						</div>
						<div className={classes.thumbsContent}>
							
						</div>
					</article>
					<article className={classes.thumbList}>
						<div className={classes.thumbImg}>
							<Link className={classes.thumbsItem} href="/">
								<a>
								<Image
									src={Thumbs}
									height={512} width={512} 
									alt="Thumbs"
								/>
								</a>
							</Link>
						</div>
						<div className={classes.thumbInfo}>
							<h5 className={classes.thumbTitle}><Link href="#"><a>NFT Name</a></Link></h5>
							<p className={classes.thumbDesc}>
							Lorem ipsum dolor sit amet, consectetur ist at...
							</p>
							<div className={classes.chainName}>
							NFT Chain 
							</div>
						</div>
						<div className={classes.thumbsContent}>
							
						</div>
					</article>
					<article className={classes.thumbList}>
						<div className={classes.thumbImg}>
							<Link className={classes.thumbsItem} href="/">
								<a>
								<Image
									src={Thumbs}
									height={512} width={512} 
									alt="Thumbs"
								/>
								</a>
							</Link>
						</div>
						<div className={classes.thumbInfo}>
							<h5 className={classes.thumbTitle}><Link href="#"><a>NFT Name</a></Link></h5>
							<p className={classes.thumbDesc}>
							Lorem ipsum dolor sit amet, consectetur ist at...
							</p>
							<div className={classes.chainName}>
							NFT Chain 
							</div>
						</div>
						<div className={classes.thumbsContent}>
							
						</div>
					</article>
					<article className={classes.thumbList}>
						<div className={classes.thumbImg}>
							<Link className={classes.thumbsItem} href="/">
								<a>
								<Image
									src={Thumbs}
									height={512} width={512} 
									alt="Thumbs"
								/>
								</a>
							</Link>
						</div>
						<div className={classes.thumbInfo}>
							<h5 className={classes.thumbTitle}>
								<Link href="#"><a>NFT Name</a></Link>
							</h5>
							<p className={classes.thumbDesc}>
							Lorem ipsum dolor sit amet, consectetur ist at...
							</p>
							<div className={classes.chainName}>
							NFT Chain 
							</div>
						</div>
						<div className={classes.thumbsContent}>
							
						</div>
					</article>
					<article className={classes.thumbList}>
						<div className={classes.thumbImg}>
							<Link className={classes.thumbsItem} href="/">
								<a>
								<Image
									src={Thumbs}
									height={512} width={512} 
									alt="Thumbs"
								/>
								</a>
							</Link>
						</div>
						<div className={classes.thumbInfo}>
							<h5 className={classes.thumbTitle}><Link href="#"><a>NFT Name</a></Link></h5>
							<p className={classes.thumbDesc}>
							Lorem ipsum dolor sit amet, consectetur ist at...
							</p>
							<div className={classes.chainName}>
							NFT Chain 
							</div>
						</div>
						<div className={classes.thumbsContent}>
							
						</div>
					</article>
					<article className={classes.thumbList}>
						<div className={classes.thumbImg}>
							<Link className={classes.thumbsItem} href="#">
								<a>
								<Image
									src={Thumbs}
									height={512} width={512} 
									alt="Thumbs"
								/>
								</a>
							</Link>
						</div>
						<div className={classes.thumbInfo}>
							<h5 className={classes.thumbTitle}><Link href="#"><a>NFT Name</a></Link></h5>
							<p className={classes.thumbDesc}>
							Lorem ipsum dolor sit amet, consectetur ist at...
							</p>
							<div className={classes.chainName}>
							NFT Chain 
							</div>
						</div>
						<div className={classes.thumbsContent}>
							
						</div>
					</article>
					<article className={classes.thumbList}>
						<div className={classes.thumbImg}>
							<Link className={classes.thumbsItem} href="#">
								<a>
								<Image
									src={Thumbs}
									height={512} width={512} 
									alt="Thumbs"
								/>
								</a>
							</Link>
						</div>
						<div className={classes.thumbInfo}>
							<h5 className={classes.thumbTitle}><Link href="#"><a>NFT Name</a></Link></h5>
							<p className={classes.thumbDesc}>
							Lorem ipsum dolor sit amet, consectetur ist at...
							</p>
							<div className={classes.chainName}>
							NFT Chain 
							</div>
						</div>
						<div className={classes.thumbsContent}>
							
						</div>
					</article>
					
					<article className={classes.thumbList}>
						<div className={classes.thumbImg}>
							<Link className={classes.thumbsItem} href="/">
								<a>
								<Image
									src={Thumbs}
									height={512} width={512} 
									alt="Thumbs"
								/>
								</a>
							</Link>
						</div>
						<div className={classes.thumbInfo}>
							<h5 className={classes.thumbTitle}><Link href="#"><a>NFT Name</a></Link></h5>
							<p className={classes.thumbDesc}>
							Lorem ipsum dolor sit amet, consectetur ist at...
							</p>
							<div className={classes.chainName}>
							NFT Chain 
							</div>
						</div>
						<div className={classes.thumbsContent}>
							
						</div>
					</article>

				</div>
			
			</div>
			

			<div className={classes.footer}>
				<div className="container">
					<div className={classes.profileLike}>
						<div className={classes.profileWrap}>
							<div className={classes.userLogged}>
								<div className={classes.userImg}>
									<Image className={classes.profileImg} src={Profile} width={48} height={48} alt="Profile Image" />
								</div>
								<div className={classes.userInfo}>
									<h4>@Hatboy</h4>
									<div className={classes.textMini}>
										<Link href="">
										<a>view profile <FontAwesomeIcon icon={faArrowRight} size="lg" /></a>
										</Link>
									</div>
								</div>
							</div>
							<div className={classes.likesCount}>
								<span className="d-block"><FontAwesomeIcon icon={faHeart} size="lg" /></span>
								99K
							</div>
						</div>
					</div>			
				
					<div className={classes.copyright}>Copyright 2022 ©username. All rights reserved. | Powered by  <Image src={downArrow} alt='Down Logo' width={26} height={22} className={classes.copyrightLogo} /> </div>
				</div>
			</div>
		</>
    );
}

