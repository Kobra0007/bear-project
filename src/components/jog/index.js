import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Row } from 'react-flexbox-grid';

import Icon from '../../components/icon';
import Text from '../../components/text';

import classes from './styles.css';
export default function (props) {
    return (
        <div className={classes.wrapper}>
            <Icon type="icon-jog" size={87} className={classes.icon} />
            <div className={classes.information}>
                <Text className={classes.time}>
                    20.07.2019
                </Text>
                <Text className={classes.value}>
                    <span className={classes.param}>Speed:</span>&nbsp;
                    15
                </Text>
                <Text className={classes.value}>
                    <span className={classes.param}>Distance:</span>&nbsp;
                    10km
                </Text>
                <Text className={classes.value}>
                    <span className={classes.param}>Time:</span>&nbsp;
                    60min
                </Text>
            </div>
        </div>
    );
}