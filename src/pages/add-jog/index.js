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
        const { cancel } = this.props;

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

                    <Card className={classes.card} >
                        <Input placeholder='speed' label='Distance' className={classes.input}/>
                        <Input placeholder='time' label='Time' className={classes.input}/>
                        <DatePicker label='Date' />
                        <Button htmlType='submit' className={classes.btn}>Save</Button>
                        <Icon type="cancel" size={27} className={classes.cancel} onClick={cancel}/>
                    </Card>

            </Fragment>
        );
    }
}

const mapStateToProps = ({ }) => ({

});

const mapDispatchToProps = dispatch => ({
    cancel: () => dispatch(push('/jogs')),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddJog);
// export default AddJog;