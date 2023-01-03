import React, { FC } from 'react';
import s from '../../../styles/sections/Logger/LogItem.module.css';

interface LogItemProps {
	log: string;
}

const LogItem: FC<LogItemProps> = ({ log }) => {
	return <p className={s.logItem}>{log}</p>;
};

export default LogItem;
