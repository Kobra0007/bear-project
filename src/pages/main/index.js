import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-flexbox-grid';
import {Helmet} from 'react-helmet';

import Card from '../../components/card';
import Icon from '../../components/icon';
import Text from '../../components/text';
import Button from '../../components/button';

import AddJog from '../add-jog';

import classes from './styles.css';

function AboutUs (props) {
    return (
        <Fragment>
            <Helmet>
                <title>
                    Info
                </title>
                <meta
                    name="description"
                    content="info"
                />
            </Helmet>
            <Row>
                <Col xs={12}>
                    {/* <AddJog /> */}
                    <Card className={classes.card}>
                        <Icon type="bear-face" size={160} className={classes.icon} />
                        <Button className={classes.btn} onClick={() => alert('lol')}>Let me in</Button>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
}

export default AboutUs;
