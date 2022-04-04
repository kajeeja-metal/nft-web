import React, { useEffect } from "react";


export default function Home() {
	useEffect( () => { document.querySelector("body").classList.add("mainHome") } );
	return (
	<>
		<div className="container">
			<div className="contentwrap">
				<h1>Main Home Page</h1>
			</div>
		</div>
	</>
  )
}
