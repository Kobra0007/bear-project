import React, { Component, Fragment } from 'react';
import { Col, Row } from 'react-flexbox-grid';
import {Link} from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/ru';
import {Helmet} from 'react-helmet';
import {withFormik} from 'formik';
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

import { updateJog } from '../../redux/modules/jogs';


const JogForm = props => {
    const { 
        cancel,
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
    } = props;

    return (
            <form noValidate onSubmit={handleSubmit}>
                <Input
                    placeholder='Distance'
                    label='Distance'
                    className={classes.input}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.distance}
                    name="distance"
                />

                <Input
                    placeholder='time'
                    label='Time'
                    className={classes.input}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.time}
                    name="time"
                />

                <DatePicker
                    label='Date'
                    onChange={( value ) => setFieldValue('date', moment(value).format('L'))}
                    onBlur={handleBlur}
                    value={values.date}
                    name="date"
                />

                <Button
                    htmlType='submit'
                    className={classes.btn}
                >
                    Save
                </Button>

                <Icon
                    type="cancel"
                    size={27}
                    className={classes.cancel}
                    onClick={cancel}
                />
            </form>
    );
};

const MyForm = withFormik({
	handleSubmit: (values, { props, setErrors, setSubmitting }) => {
		props.onSubmit(values, { setErrors, setSubmitting });
	},
    mapPropsToValues: ({ data }) => ({ ...data }),
    displayName: 'JogForm',
})(JogForm);

class EditJog extends Component {

    static propTypes = {

    };
    render() {
        const formikData = {
            distance: 0,
            time: 0,
            date: moment().format('L')
        };
        return (
            <Fragment>
                    <Helmet>
                        <title>
                        Edit Jog
                        </title>
                        <meta
                            name="description"
                            content="Edit Jog"
                        />
                    </Helmet>

                    <Card className={classes.card} >
                        <MyForm 
                            {...this.props}
                            data={{...formikData}}

                        />
                    </Card>

            </Fragment>
        );
    }
}

const mapStateToProps = ({ }) => ({

});

const mapDispatchToProps = dispatch => ({
    cancel: () => dispatch(push('/jogs')),
    onSubmit: (payload) => dispatch(updateJog(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditJog);