import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Row } from 'react-flexbox-grid';
import {Helmet} from 'react-helmet';
import Icon from '../../components/icon';
import Text from '../../components/text';

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
                    <Col xs={6}>
                        <Text type='h1'>CONTACT</Text>
                        <Text>
                            sdfsdsdf
                        </Text>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
}

export default AboutUs;
