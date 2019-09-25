import React, { Component, Fragment } from 'react';
import { Col, Row } from 'react-flexbox-grid';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled, { css } from 'styled-components';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';

import Icon from '../../components/icon';
import Input from '../../components/input';
import Text from '../../components/text';
import Card from '../../components/card';
import Button from '../../components/button';

import DatePicker from '../../components/datepicker';

import classes from './styles.css';


class AddJog extends Component {

    static propTypes = {

    };
    render() {
        const {} = this.props;
        return (
            <Fragment>
                    <Helmet>
                        <title>
                            Add Jog
                        </title>
                        <meta
                            name="description"
                            content="Add Jog"
                        />
                    </Helmet>

                    <Card className={classes.card} onClick={this.props.cancel()}>
                        <Input placeholder='speed' label='Distance' />
                        <Input placeholder='time' label='Time' />
                        <DatePicker label='Date' />
                        <Button htmlType='submit'>Save</Button>
                    </Card>

            </Fragment>
        );
    }
}

const mapStateToProps = ({ }) => ({

});

const mapDispatchToProps = dispatch => ({
    cancel: () => dispatch(push('/jogs')),
    // fetchInfo: payload => dispatch(recommendFetchInfoForMakeRecommend(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddJog);