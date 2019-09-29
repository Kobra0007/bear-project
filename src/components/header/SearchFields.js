import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled, { css } from 'styled-components';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import {Grid, Row, Col} from 'react-flexbox-grid';
import { setSortedJogs } from '../../redux/modules/jogs';
import DatePicker from '../datepicker';

class SearchFields extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            from: moment().format('L'),
            to: moment().format('L')
        }
    }
    handleChange = (value, type) => {
		this.setState((prevState) => (type == 'from' ? {from: moment(value).format('L')} : {to: moment(value).format('L')} ));
    };

    sortJogs = () => {
        const { jogs, addSortedJogs } = this.props;
        const { from, to } = this.state;

        let fromSec = Date.parse(new Date(from.split('.').reverse().join('.'))) / 1000;
        let toSec = Date.parse(new Date(to.split('.').reverse().join('.'))) / 1000;

        let sortedJogs = jogs.filter((item) => item.date >= fromSec && item.date <= toSec);
        addSortedJogs(sortedJogs);
    }

	render() {
        const { from, to } = this.state;

        return (
			<>
                <Grid>
                    <Row center="sm">
                        <Col>
                            <DatePicker
                                label='Date From'
                                onBlur={this.sortJogs}
                                onChange={(value) => this.handleChange(value, 'from')}
                                value={from}
                            />
                        </Col>
                        <Col>
                            <DatePicker
                                label='Date To'
                                onBlur={this.sortJogs}
                                onChange={(value) => this.handleChange(value, 'to')}
                                value={to}
                            />
                        </Col>
                    </Row>
                </Grid>
			</>
		)
	}
}

const mapStateToProps = ({jogs}) => ({
	jogs: jogs.jogsArr
});

const mapDispatchToProps = dispatch => ({
    addSortedJogs: payload => dispatch(setSortedJogs(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchFields);