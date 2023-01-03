import React, { FC, useMemo, useState } from 'react';
import './App.css';
import { IAppMode } from './types/types';
import Field from './components/sections/Field/Field';
import AppModeForm from './components/sections/AppModeForm';
import { useFetch } from './hooks/useFetch';
import Logger from './components/sections/Logger/Logger';
import { LoggerContext } from './context/loggerContext';

const App: FC = () => {
	const [selectedAppMode, setSelectedAppMode] = useState<IAppMode | undefined>({
		name: '',
		field: 0,
	});
	const [appModes, isLoading, isError] = useFetch<IAppMode[]>(
		'https://demo7919674.mockable.io',
		[]
	);
	const [logs, setLogs] = useState<string[]>([]);

	const loggerContextValue = useMemo(
		() => ({
			addLog: (newLog: string): void => {
				setLogs((prev) => [...prev, newLog]);
			},
		}),
		[]
	);

	if (isError) {
		return (
			<h3 className='error'>
				Something went wrong. Check your internet connection.
			</h3>
		);
	}

	if (isLoading) {
		return <h3 className='loading'>Loading...</h3>;
	}

	return (
		<div className='container'>
			<LoggerContext.Provider value={loggerContextValue}>
				<div>
					<AppModeForm modes={appModes} setValue={setSelectedAppMode} />
					{selectedAppMode != null && <Field size={selectedAppMode.field} />}
				</div>
				<Logger logs={logs} />
			</LoggerContext.Provider>
		</div>
	);
};

export default App;
