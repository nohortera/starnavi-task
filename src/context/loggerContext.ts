import { createContext } from 'react';

interface LoggerContextInterface {
	addLog: (newLog: string) => void;
}

export const LoggerContext = createContext<LoggerContextInterface>({
	addLog: () => {},
});
