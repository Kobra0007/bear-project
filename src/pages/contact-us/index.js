import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Row } from 'react-flexbox-grid';
import {Helmet} from 'react-helmet';
import Icon from '../../components/icon';
import Text from '../../components/text';

import styled from 'styled-components';

const Info = styled(Text)`
    font-family: SFUIText;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.71;
    letter-spacing: normal;
    margin-bottom: 40px;
    text-align: initial;
`;

const Title = styled(Text)`
    font-family: SFUIText;
    font-size: 36px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #7ed321
    margin-bottom: 15px;
    text-align: initial;
`;

function AboutUs (props) {
    return (
        <Fragment>
                <Helmet>
                    <title>
                        CONTACT US
                    </title>
                    <meta
                        name="description"
                        content=""
                    />
                </Helmet>
            <div>
                <Row center="xs">
                    <Col xs={12} sm={6}>
                        <Title type='h1'>CONTACT US</Title>
                        <Info>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                            took a galley of type and scrambled it to make a type specimen book. It has survived not 
                            only five centuries, but also the leap into electronic typesetting, remaining essentially 
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
                            PageMaker including versions of Lorem Ipsum.
                        </Info>
                        <Info>
                            It is a long established fact that a reader will be distracted by the readable content of a page
                            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
                            normal distribution of letters, as opposed to using 'Content here, content here', making it
                            look like readable English.
                        </Info>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
}

export default AboutUs;
