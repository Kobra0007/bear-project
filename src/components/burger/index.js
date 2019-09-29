import React from 'react';
import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';


const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 45pt;
`;

const MenuToggle = styled.div`	
	display: block;
	position: relative;
	top: 3px;
	-webkit-user-select: none;
	user-select: none;
	
	input {
		display: block;
		width: 40px;
		height: 32px;
		position: absolute;
		top: -2px;
		left: -5px;
		
		cursor: pointer;
		
		opacity: 0; /* hide this */
		z-index: 2; /* and place it over the hamburger */
		
		-webkit-touch-callout: none;
	}

	.burgerIcon {
		display: block;
		width: 33px;
		height: 5px;
		margin-bottom: 5px;
		position: relative;
		
		background: #ffffff;
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
		transform: rotate(45deg) translate(3px, -1px);
		background: #b0abab;
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
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: #ffff;
		position: absolute;
		top: 0px;
		right: -20px;
		width: 100vw;
		height: 100vh
		margin: -46px 0 0 -50px;
		padding: 25px;
		padding-top: 120px;
		box-shadow: 0 4px 8px 0 rgba(26, 26, 26, 0.1);
		
		list-style-type: none;
		-webkit-font-smoothing: antialiased;
		/* to stop flickering of text in safari */
		
		transform-origin: 0% 0%;
		transform: translate(0, -100%);
		
		transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);

		@media only screen and ( max-width: 575px) {
			right: -12px;
		}
	}

	ul li {
		text-align: center;
		margin-bottom: 25px;
	}

	input:checked ~ ul {
		transform: none;
	}
`;

const NLink = styled(Link)`
	text-decoration: none;
	font-size: 26px;
    font-family: SFUIText;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
	letter-spacing: normal;
	color: #333333;
	
	&:visited {
		color: #333333;
	}

	&.active {
		color: #7ed321;
	}

`;



export default function BurgerMenu (props) {

	let inputCheckbox = React.createRef();

	function handleClick () {
		inputCheckbox.current.checked = false;
		props.burgerClick();
	}

	return (
		<Nav role="navigation">
			<MenuToggle>

				<input type="checkbox" ref={inputCheckbox} onClick={props.burgerClick} />

				<span className="burgerIcon"></span>
				<span className="burgerIcon"></span>
				<span className="burgerIcon"></span>

				<ul id="menu">
					<li>
						<NLink to="/jogs" onClick={handleClick}>
							JOGS
						</NLink>
					</li>

					<li>
						<NLink to="/about-us" onClick={handleClick}>
							INFO
						</NLink>
					</li>

					<li>
						<NLink to="/contact-us" onClick={handleClick}>
							CONTACT US
						</NLink>
					</li>

				</ul>
			</MenuToggle>
		</Nav>
	);
}