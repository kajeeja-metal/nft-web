import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from './Exhibitions002.module.scss';

import thumbsFull from '../../../../public/profile/profile002/images/thumbsfull.png';


export default function Exhibitions002() {
      return (
		<>
			<div className={classes.spacesWrap}>
                    <Link className={classes.thumbsItem} href="/">
                      <a>
                        <article className={classes.thumbsFullWrap}>
                          <Image
                            src={thumbsFull}
                            height={900}
                            width={1600}
                            alt="Thumbs"
                          />
                        </article>
                      </a>
                    </Link>
                    <Link className={classes.thumbsItem} href="/">
                      <a>
                        <article className={classes.thumbsFullWrap}>
                          <Image
                            src={thumbsFull}
                            height={900}
                            width={1600}
                            alt="Thumbs"
                          />
                        </article>
                      </a>
                    </Link>
			</div>
		</>
  );
}

