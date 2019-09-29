import React, { Component, Fragment } from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import { connect } from 'react-redux';
import { Grid, Col, Row } from 'react-flexbox-grid';

import Icon from '../../components/icon';
import Text from '../../components/text';
import Divider from '../../components/divider';


import classes from './styles.css';
export default function ({id, userId, distance, time, date, onClick, ...selfProps}) {

    let dateJog = moment(date*1000).format('L').replace(/\//g,'.');
    
    return (
        <>
        <div className={classes.wrapper} onClick={onClick}>
            <Icon type="icon-jog" size={87} className={classes.icon} />
            <div className={classes.information}>
                <Text className={classes.time}>
                    {dateJog}
                </Text>
                <Text className={classes.value}>
                    <span className={classes.param}>Speed:</span>&nbsp;
                    {Math.round(distance / (time / 60 ))} km/h
                </Text>
                <Text className={classes.value}>
                    <span className={classes.param}>Distance:</span>&nbsp;
                    {distance} km
                </Text>
                <Text className={classes.value}>
                    <span className={classes.param}>Time:</span>&nbsp;
                    {time} min
                </Text>
            </div>
        </div>
        <Divider />
        </>
    );
}