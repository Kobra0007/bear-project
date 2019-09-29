import React, {Fragment} from 'react';
import { default as DatePickerInput }  from "react-datepicker";
import styled from 'styled-components';

import "react-datepicker/dist/react-datepicker.css";

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import Text from '../text';

const Block = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;


class DatePicker extends React.Component {

	render() {
		const { label = '', wrapperClassName, labelClassName, datePickerClassName, value, ...selfProps} = this.props;
		
		return (
			<Block className={wrapperClassName}>
				<Text className={labelClassName}>{label}</Text>
				<DatePickerInput
					className={datePickerClassName}
					placeholder='Select date ...'
					selected={!!value ? new Date(value.split('.').reverse().join(',')) : new Date()}
					{...selfProps}
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