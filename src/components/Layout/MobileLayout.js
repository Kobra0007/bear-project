import React, {Fragment} from 'react';
import styled from 'styled-components';
import { Grid, Col, Row } from 'react-flexbox-grid';

import Header from '../header';

const ContentContainer = styled(Grid)`
	min-height: calc(100vh - 116px);
	position: relative;
	padding: 0 25pt;
`;

class MainLayout extends React.Component {
	render() {
		return (
			<Fragment>
				<Header mobile={true}/>

				<ContentContainer>
					{this.props.children}
				</ContentContainer>

			</Fragment>
		);
	}
}

export default MainLayout;