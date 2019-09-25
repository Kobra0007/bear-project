import React from 'react';
import styled from 'styled-components';

import Icon from '../icon';
import Divider from '../divider';

const MenuToggle = styled.div`	
	display: block;
	position: absolute;
    top: 18px;
    right: 20px;
	
	z-index: 11;
	
	
	-webkit-user-select: none;
	user-select: none;
	
	input {
		display: block;
		width: 40px;
		height: 32px;
		position: absolute;
		top: -7px;
		left: -5px;
		
		cursor: pointer;
		
		opacity: 0; /* hide this */
		z-index: 2; /* and place it over the hamburger */
		
		-webkit-touch-callout: none;
	}

	.divider {
		margin: 5px 0;
	}

	.burgerIcon {
		display: block;
		width: 33px;
		height: 4px;
		margin-bottom: 5px;
		position: relative;
		
		background: #606060;
		border-radius: 3px;
		
		z-index: 1;
		
		transform-origin: 4px 0px;
		
		transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
	}

	/* 
	 * Transform all the slices of hamburger
	 * into a crossmark.
	 */
	input:checked ~ span {
		opacity: 1;
		transform: rotate(45deg) translate(-2px, -1px);
		background: #232323;
	}

	/*
	 * But let's hide the middle one.
	 */
	input:checked ~ span:nth-last-child(3) {
		opacity: 0;
		transform: rotate(0deg) scale(0.2, 0.2);
	}

	/*
	 * The last one should go the other direction
	 */
	input:checked ~ span:nth-last-child(2) {
		transform: rotate(-45deg) translate(0, -1px);
	}

	/*
	 * Make this absolute positioned
	 * at the top left of the screen
	 */
	ul {
		background-color: #ffff;
		position: absolute;
		top: 0px;
		right: -20px;
		width: 300px;
		margin: -100px 0 0 -50px;
		padding: 25px;
		padding-top: 120px;
		box-shadow: 0 4px 8px 0 rgba(26, 26, 26, 0.1);
		
		list-style-type: none;
		-webkit-font-smoothing: antialiased;
		/* to stop flickering of text in safari */
		
		transform-origin: 0% 0%;
		transform: translate(0, -100%);
		
		transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
	}

	ul a {
		display: block;
	}
	ul button {
		&:nth-child(n) {
			display: inline-flex;
			margin-top: 10px;		
			margin-right: 10px;	
		}
	}
	ul a li {
		padding: 10px 0;
		font-size: 1.0em;
		display: inline-block;
		color: black;
	}
	
	ul a span {
		display: inline-block;
		position: relative;
		top: 3px;
	}

	/*
	 * And let's slide it in from the left
	 */
	input:checked ~ ul {
		transform: none;
	}
`;

const BurgerMenu = ({}) => {
	return (
		<nav className="burgerMenu" role="navigation">
			<MenuToggle>

				<input type="checkbox" />

				<span className="burgerIcon"></span>
				<span className="burgerIcon"></span>
				<span className="burgerIcon"></span>

				<ul id="menu">
					<a href="/jogs">
						<li>JOGS</li>
					</a>
					<Divider className="divider"/>

					<a href="/about-us">
						<li>INFO</li>
					</a>
					<Divider className="divider"/>

					<a href="/contact-us">
						<li>CONTACT US</li>
					</a>

				</ul>
			</MenuToggle>
		</nav>
	);
}

export default BurgerMenu;