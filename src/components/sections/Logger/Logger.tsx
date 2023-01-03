import React, { FC } from 'react';
import LogItem from './LogItem';
import s from '../../../styles/sections/Logger/Logger.module.css';

interface LoggerProps {
	logs: string[];
}

const Logger: FC<LoggerProps> = ({ logs }) => {
	return (
		<div>
			<h2>Hover squares</h2>
			<div className={s.logsWrapper}>
				{logs.map((log) => (
					<LogItem key={Math.random()} log={log} />
				))}
			</div>
		</div>
	);
};

export default React.memo(Logger);
