import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import classes from './Collection004.module.scss';

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Thumbs from '../../../public/collections/collections004/images/thumb.png';
import Thumbs2 from '../../../public/collections/collections004/images/thumb2.png';
import Thumbs3 from '../../../public/collections/collections004/images/thumb3.png';
import Thumbs4 from '../../../public/collections/collections004/images/thumb4.png';
import Profile from '../../../public/collections/collections004/images/profile.png';
import downArrow from '../../../public/collections/collections004/images/down-arrow.png';

import { faShareNodes, faArrowRight, faLink, faPen } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
library.add( faArrowRight, faShareNodes, faHeart, faTwitter, faFacebook, faLink, faPen);

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#FF4755", borderRadius:"50%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#FF4755", borderRadius:"50%" }}
      onClick={onClick}
    />
  );
}

export default function Collection004() {
  useEffect(() => {
      document.querySelector("body").classList.add("collectionFour");
  });
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    //vertical: true,
    //verticalSwiping: true,
    arrows:true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
        slidesToShow: 2,
        variableWidth: false,
      }
    } 
		]
  };

	return (
		<>  
			<div className={classes.collectionWrap}>
				<div className={`container` + ' ' + classes.container}>
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

					<div className="row">
						<div className="col-md-3">
              <div className={classes.userImg}>
                <Image className={classes.profileImg} src={Profile} width={376} height={376} alt="Profile Image" />
              </div>
              <div className={classes.headWrap}>
								<h1>Collection</h1>
								<h6>(100 Assets)</h6>
							</div>
              <p className={classes.userDesc}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie maecenas dui condimentum vitae, integer leo, eget tortor. Fauc ibus morbi fusce rutrum vestibulum pellentesque augue convallis hendrerit adipiscing. Mauris sed sed dignissim in vel egestas tri  tortor. Fauc ibus morbi fusce rutrum vestibulum pellentesque augue convallis hendrerit adipiscing. Mauris sed sed dignissim in vel egestas tris...
							</p>
						</div>
						<div className="col-md-9">
              <div className={classes.collectionAll}>
                <Slider {...settings}>
                  <article className={classes.thumbList}>
                    <div className={classes.thumbImg}>
                      <Link className={classes.thumbsItem} href="#">
                        <a>
                        <Image
                          src={Thumbs}
                          height={240} width={234} 
                          alt="Thumbs"
                        />
                        </a>
                      </Link>
                    </div>
                    <div className={classes.thumbInfo}>
                      <h5 className={classes.thumbTitle}><Link href="#"><a>3D Soft Curves</a></Link></h5>  
                    </div>
                    <div className={classes.thumbsContent}>
                      
                    </div>
                  </article>
                  <article className={classes.thumbList}>
                    <div className={classes.thumbImg}>
                      <Link className={classes.thumbsItem} href="#">
                        <a>
                        <Image
                          src={Thumbs2}
                          height={240} width={234} 
                          alt="Thumbs"
                        />
                        </a>
                      </Link>
                    </div>
                    <div className={classes.thumbInfo}>
                      <h5 className={classes.thumbTitle}><Link href="#"><a>3D Soft Curves</a></Link></h5>  
                    </div>
                    <div className={classes.thumbsContent}>
                      
                    </div>
                  </article>
                  <article className={classes.thumbList}>
                    <div className={classes.thumbImg}>
                      <Link className={classes.thumbsItem} href="#">
                        <a>
                        <Image
                          src={Thumbs3}
                          height={240} width={234} 
                          alt="Thumbs"
                        />
                        </a>
                      </Link>
                    </div>
                    <div className={classes.thumbInfo}>
                      <h5 className={classes.thumbTitle}><Link href="#"><a>3D Soft Curves</a></Link></h5>  
                    </div>
                    <div className={classes.thumbsContent}>
                      
                    </div>
                  </article>
                  <article className={classes.thumbList}>
                    <div className={classes.thumbImg}>
                      <Link className={classes.thumbsItem} href="#">
                        <a>
                        <Image
                          src={Thumbs4}
                          height={240} width={234} 
                          alt="Thumbs"
                        />
                        </a>
                      </Link>
                    </div>
                    <div className={classes.thumbInfo}>
                      <h5 className={classes.thumbTitle}><Link href="#"><a>3D Soft Curves</a></Link></h5>  
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
                          height={240} width={234} 
                          alt="Thumbs"
                        />
                        </a>
                      </Link>
                    </div>
                    <div className={classes.thumbInfo}>
                      <h5 className={classes.thumbTitle}><Link href="#"><a>3D Soft Curves</a></Link></h5>  
                    </div>
                    <div className={classes.thumbsContent}>
                      
                    </div>
                  </article>
                  <article className={classes.thumbList}>
                    <div className={classes.thumbImg}>
                      <Link className={classes.thumbsItem} href="#">
                        <a>
                        <Image
                          src={Thumbs2}
                          height={240} width={234} 
                          alt="Thumbs"
                        />
                        </a>
                      </Link>
                    </div>
                    <div className={classes.thumbInfo}>
                      <h5 className={classes.thumbTitle}><Link href="#"><a>3D Soft Curves</a></Link></h5>  
                    </div>
                    <div className={classes.thumbsContent}>
                      
                    </div>
                  </article>
                  <article className={classes.thumbList}>
                    <div className={classes.thumbImg}>
                      <Link className={classes.thumbsItem} href="#">
                        <a>
                        <Image
                          src={Thumbs3}
                          height={240} width={234} 
                          alt="Thumbs"
                        />
                        </a>
                      </Link>
                    </div>
                    <div className={classes.thumbInfo}>
                      <h5 className={classes.thumbTitle}><Link href="#"><a>3D Soft Curves</a></Link></h5>  
                    </div>
                    <div className={classes.thumbsContent}>
                      
                    </div>
                  </article>
                  <article className={classes.thumbList}>
                    <div className={classes.thumbImg}>
                      <Link className={classes.thumbsItem} href="#">
                        <a>
                        <Image
                          src={Thumbs4}
                          height={240} width={234} 
                          alt="Thumbs"
                        />
                        </a>
                      </Link>
                    </div>
                    <div className={classes.thumbInfo}>
                      <h5 className={classes.thumbTitle}><Link href="#"><a>3D Soft Curves</a></Link></h5>  
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
                          height={240} width={234} 
                          alt="Thumbs"
                        />
                        </a>
                      </Link>
                    </div>
                    <div className={classes.thumbInfo}>
                      <h5 className={classes.thumbTitle}><Link href="#"><a>3D Soft Curves</a></Link></h5>  
                    </div>
                    <div className={classes.thumbsContent}>
                      
                    </div>
                  </article>
                  <article className={classes.thumbList}>
                    <div className={classes.thumbImg}>
                      <Link className={classes.thumbsItem} href="#">
                        <a>
                        <Image
                          src={Thumbs2}
                          height={240} width={234} 
                          alt="Thumbs"
                        />
                        </a>
                      </Link>
                    </div>
                    <div className={classes.thumbInfo}>
                      <h5 className={classes.thumbTitle}><Link href="#"><a>3D Soft Curves</a></Link></h5>  
                    </div>
                    <div className={classes.thumbsContent}>
                      
                    </div>
                  </article>
                  <article className={classes.thumbList}>
                    <div className={classes.thumbImg}>
                      <Link className={classes.thumbsItem} href="#">
                        <a>
                        <Image
                          src={Thumbs3}
                          height={240} width={234} 
                          alt="Thumbs"
                        />
                        </a>
                      </Link>
                    </div>
                    <div className={classes.thumbInfo}>
                      <h5 className={classes.thumbTitle}><Link href="#"><a>3D Soft Curves</a></Link></h5>  
                    </div>
                    <div className={classes.thumbsContent}>
                      
                    </div>
                  </article>
                  <article className={classes.thumbList}>
                    <div className={classes.thumbImg}>
                      <Link className={classes.thumbsItem} href="#">
                        <a>
                        <Image
                          src={Thumbs4}
                          height={240} width={234} 
                          alt="Thumbs"
                        />
                        </a>
                      </Link>
                    </div>
                    <div className={classes.thumbInfo}>
                      <h5 className={classes.thumbTitle}><Link href="#"><a>3D Soft Curves</a></Link></h5>  
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
                          height={240} width={234} 
                          alt="Thumbs"
                        />
                        </a>
                      </Link>
                    </div>
                    <div className={classes.thumbInfo}>
                      <h5 className={classes.thumbTitle}><Link href="#"><a>3D Soft Curves</a></Link></h5>  
                    </div>
                    <div className={classes.thumbsContent}>
                      
                    </div>
                  </article>
                  <article className={classes.thumbList}>
                    <div className={classes.thumbImg}>
                      <Link className={classes.thumbsItem} href="#">
                        <a>
                        <Image
                          src={Thumbs2}
                          height={240} width={234} 
                          alt="Thumbs"
                        />
                        </a>
                      </Link>
                    </div>
                    <div className={classes.thumbInfo}>
                      <h5 className={classes.thumbTitle}><Link href="#"><a>3D Soft Curves</a></Link></h5>  
                    </div>
                    <div className={classes.thumbsContent}>
                      
                    </div>
                  </article>
                  <article className={classes.thumbList}>
                    <div className={classes.thumbImg}>
                      <Link className={classes.thumbsItem} href="#">
                        <a>
                        <Image
                          src={Thumbs3}
                          height={240} width={234} 
                          alt="Thumbs"
                        />
                        </a>
                      </Link>
                    </div>
                    <div className={classes.thumbInfo}>
                      <h5 className={classes.thumbTitle}><Link href="#"><a>3D Soft Curves</a></Link></h5>  
                    </div>
                    <div className={classes.thumbsContent}>
                      
                    </div>
                  </article>
                  <article className={classes.thumbList}>
                    <div className={classes.thumbImg}>
                      <Link className={classes.thumbsItem} href="#">
                        <a>
                        <Image
                          src={Thumbs4}
                          height={240} width={234} 
                          alt="Thumbs"
                        />
                        </a>
                      </Link>
                    </div>
                    <div className={classes.thumbInfo}>
                      <h5 className={classes.thumbTitle}><Link href="#"><a>3D Soft Curves</a></Link></h5>  
                    </div>
                    <div className={classes.thumbsContent}>
                      
                    </div>
                  </article>
                </Slider>
              </div>
							
						</div>
					</div>


				</div>
			</div>
	

			<div className={classes.footer}>
				<div className={`container` + ' ' + classes.container}>
					<div className={classes.profileLike}>
						<div className={classes.profileWrap}>
							<div className={classes.userLogged}>
								
								<div className={classes.userInfo}>
									<h4>@Soundmint</h4>
									<div className={classes.viewLink}>
										<Link href="#">
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
				
					<div className={classes.copyright}>Copyright 2022 ©username. All rights reserved. | Powered by  <span className={classes.copyrightLogo}><Image src={downArrow} alt='Down Logo' width={26} height={22}  /> </span> NFTIFY</div>
				</div>
			</div>
		</>
    );
}

