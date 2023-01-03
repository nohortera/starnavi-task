import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import Select from '../common/Select';
import { IAppMode } from '../../types/types';
import Button from '../common/Button';
import s from '../../styles/sections/AppModeForm.module.css';

interface ModeFormProps {
	modes: IAppMode[];
	setValue: Dispatch<SetStateAction<IAppMode | undefined>>;
}

const AppModeForm: FC<ModeFormProps> = ({ modes, setValue }) => {
	const [selectedOption, setSelectedOption] = useState('');

	const setAppMode = (e: React.MouseEvent): void => {
		e.preventDefault();
		setValue(modes.find((mode) => mode.name === selectedOption));
	};

	return (
		<form className={s.form}>
			<Select
				options={modes.map((mode) => mode.name)}
				defaultValue='Pick mode'
				value={selectedOption}
				onChange={setSelectedOption}
			/>
			<Button disabled={selectedOption === ''} onClick={setAppMode}>
				START
			</Button>
		</form>
	);
};

export default AppModeForm;
