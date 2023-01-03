import React, { FC } from 'react';
import s from '../../styles/common/Select.module.css';

interface SelectProps {
	options: string[];
	value: string;
	onChange: (newValue: string) => void;
	defaultValue: string;
}
// There is possible to use ref (and I think for some reasons better) with React.forwardRef(),
// but I wanted to build reusable two-way bound component in case if for some reason we need to use it in other place.
// So I decided to show this kind of my logic in this task.
const Select: FC<SelectProps> = ({
	options,
	value,
	onChange,
	defaultValue,
}) => {
	return (
		<select
			className={s.select}
			value={value}
			onChange={(event) => {
				onChange(event.target.value);
			}}
		>
			<option disabled value=''>
				{defaultValue}
			</option>
			{options.map((option) => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export default Select;
