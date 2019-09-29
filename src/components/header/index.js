import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import { withRouter } from "react-router";
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled, { css } from 'styled-components';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import {Grid, Row, Col} from 'react-flexbox-grid';


import Icon from '../icon';

import BurgerMenu from '../burger';

import SearchFields from './SearchFields';

import classes from './styles.css';

const TopMenu = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 20;
	width: 100%;
	padding: 30px 37px;
	background: #7ed321;
	
	@media only screen and (max-width: 575px) {
		padding: 30px 20px;
	}
`;

const StyledHeader = styled.header`
	position: relative;
	height: 116px;
	@media only screen and (max-width: 575px) {
		height: 110px;
	}
`;

const Logo = styled(Icon)`
	width: 147px;

	${props => props.burgerActive && css`
		position: absolute;
		z-index: 10;
	`}
`;

const SearchFieldsBlock = styled.div`
	display: flex;
	align-items: center;
	height: 60px;
	background-color: #eaeaea;
	transition: transform .5s ease-in-out,opacity .5s ease-in-out,-webkit-transform .5s ease-in-out;
	transform: translateY(-200px);
	opacity: .1;

	${props => props.filterActive && css`
		transform: none;
		opacity: 1;
	`}
`;


class Header extends React.Component {

	constructor(props) {
		super(props);

		this.state={
			filterActive: false,
			burgerActive: false
		}
	}

	toogleFilter = () => {
		const { location } = this.props;
		if (location.pathname == '/jogs') {
			this.setState((prevState) => ({filterActive: !prevState.filterActive}));
		}
	};

	render() {
		const { filterActive, burgerActive } = this.state;
		const { mobile = false, logged} = this.props;

		return (
			<>
				<StyledHeader mobile={mobile}>
					<TopMenu>
						<Row style={{justifyContent:'space-between'}}>
							<Col>
								<Logo type={burgerActive ? 'logo-mobile' : 'logo'} size={mobile ? 50 : 56}  burgerActive={burgerActive}/>
							</Col>
						
							{logged && (
								<Col style={{flexDirection:'row', display: 'flex'}}>
									{!mobile && (
										<nav className={classes.container}>
											<ul className={classes.list}>
			
												<li>
													<NavLink to="/jogs" className={classes.item} activeClassName={classes.active}>
														JOGS
													</NavLink>
												</li>
			
												<li>
													<NavLink to="/about-us" className={classes.item} activeClassName={classes.active}>
														INFO
													</NavLink>
												</li>
			
												<li>
													<NavLink to="/contact-us" className={classes.item} activeClassName={classes.active}>
														CONTACT US
													</NavLink>
												</li>
			
											</ul>
										</nav>
									)}
		
									<Icon type={!filterActive ? "filter" : "filter-active"} size={39} onClick={this.toogleFilter} />

									{mobile && (
										<BurgerMenu burgerClick={() => this.setState((prevState) => ({burgerActive: !prevState.burgerActive}))}/>
									)}
		
								</Col>
							)}
							
						</Row>
					</TopMenu>
				</StyledHeader>
	
				<SearchFieldsBlock filterActive={filterActive}>
					<SearchFields />
				</SearchFieldsBlock>
			</>
		)
	}
}

const mapStateToProps = ({user}) => ({
	logged: user.loggedIn
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));