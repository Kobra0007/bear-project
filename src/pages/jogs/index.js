import React, { Component, Fragment } from 'react';
import { Col, Row } from 'react-flexbox-grid';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Icon from '../../components/icon';
import Text from '../../components/text';

import styled from 'styled-components';

import Jog from '../../components/jog';

import classes from './styles.css';
import Button from '../../components/button';

const AddIcon = styled(Icon)`
    position: fixed;
    bottom: 40px;
    right: 40px;
`;

let counter = [1,2,3,4];

function Jogs (props) {
    return (
        <Fragment>
                <Helmet>
                    <title>
                        Jogs
                    </title>
                    <meta
                        name="description"
                        content="jogs"
                    />
                </Helmet>
                {1 ? (
                    <div>
                        <h1>Jogs</h1>    
                        <Row center="xs">
                            <Col xs={6}>
                                {counter.map((item, idx) => <Jog data={item} key={`jog-${idx}`} />)}
                            </Col>
                        </Row>
                            <Link to='/add-jog' className={classes.link}>
                                <AddIcon type='add' size={60} />
                            </Link>
                    </div>
                ) : (
                    <Row center="xs">
                        <Col xs={5}>
                            <Icon type='sad-emoticon' size={150} />
                            <Text className={classes.nothing}>Nothing is there</Text>
                            
                            <Link to='/add-jog' className={classes.link}>
                                <Button className={classes.btn}>Create your jog first</Button>
                            </Link>
                        </Col>
                    </Row>
                )}

        </Fragment>
    );
}

export default Jogs;