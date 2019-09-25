import React, {Fragment} from 'react';
import { default as DatePickerInput }  from "react-datepicker";
import styled from 'styled-components';

import "react-datepicker/dist/react-datepicker.css";

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import Text from '../text';

const Block = styled.div`
	display: flex;
	align-items: center;
`;

const Label = styled(Text)`
	font-family: SFUIText;
	font-size: 13px;
	font-weight: normal;
	font-style: normal;
	font-stretch: normal;
	line-height: normal;
	letter-spacing: normal;
	margin-right: 15px;
	color: #979797;
`;

const DatePickerInputStyled = styled(DatePickerInput)`
	width: 100px;
	height: 31px;
	border-radius: 11px;
	border: solid 1px #979797;
	background-color: #ffffff;
	text-align: center;
`;

class DatePicker extends React.Component {
	state = {
		startDate: new Date()
	};

	handleChange = date => {
		this.setState({
			startDate: date
		});
	};

	render() {
		const { label = ''} = this.props;
		
		return (
			<Block>
				<Label>{label}</Label>
				<DatePickerInputStyled
					placeholder='Select date ...'
					selected={this.state.startDate}
					onChange={this.handleChange}
				/>
			</Block>
		);
	}
}

DatePicker.defaultProps = {

};

DatePicker.propTypes = {

};

export default DatePicker;