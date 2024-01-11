import React from 'react'


function Nav() {
	return (
		<>
			<nav>
				<img src="./images/react-icon-small.png" alt="React Logo" className="nav--icon" />
				<h3 className="nav--logo_text">ReactFacts</h3>
		
				<h4 className="nav--title"><span>Light</span><button></button><span>Dark</span></h4>
			</nav>
		</>
	)
}

export default Nav
