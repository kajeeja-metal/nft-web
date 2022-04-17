import React from "react";
import Image from "next/image";
import Link from "next/link";

import paging from '@/components/thumbnails/thumbnails006/Thumbs006.module.scss';
import classes from './Exhibitions006.module.scss';

import Thumb from '../../../../public/profile/profile006/images/exhibitionthumb.png';

export default function Exhibitions006() {
 
  return (
		<>

			<div className={classes.exhibitionWraps}>
        <div className={classes.thumblist}>
					<div className={classes.thumbImg}>
						<Link className={classes.thumbsItem} href="#">
						<a>
							<Image
							src={Thumb}
							width={512} height={512}							
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
					</div>
				</div>  
        <div className={classes.thumblist}>
					<div className={classes.thumbImg}>
						<Link className={classes.thumbsItem} href="#">
						<a>
							<Image
							src={Thumb}
							width={512} height={512}							
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
					</div>
				</div>
        <div className={classes.thumblist}>
					<div className={classes.thumbImg}>
						<Link className={classes.thumbsItem} href="#">
						<a>
							<Image
							src={Thumb}
							width={512} height={512}							
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
					</div>
				</div>
        <div className={classes.thumblist}>
					<div className={classes.thumbImg}>
						<Link className={classes.thumbsItem} href="#">
						<a>
							<Image
							src={Thumb}
							width={512} height={512}							
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
					</div>
				</div>
        <div className={classes.thumblist}>
					<div className={classes.thumbImg}>
						<Link className={classes.thumbsItem} href="#">
						<a>
							<Image
							src={Thumb}
							width={512} height={512}							
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
					</div>
				</div>
        <div className={classes.thumblist}>
					<div className={classes.thumbImg}>
						<Link className={classes.thumbsItem} href="#">
						<a>
							<Image
							src={Thumb}
							width={512} height={512}							
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
					</div>
				</div>
        <div className={classes.thumblist}>
					<div className={classes.thumbImg}>
						<Link className={classes.thumbsItem} href="#">
						<a>
							<Image
							src={Thumb}
							width={512} height={512}							
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
					</div>
				</div>
        <div className={classes.thumblist}>
					<div className={classes.thumbImg}>
						<Link className={classes.thumbsItem} href="#">
						<a>
							<Image
							src={Thumb}
							width={512} height={512}							
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

