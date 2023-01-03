import React, { FC, MouseEventHandler } from 'react';
import s from '../../styles/common/Button.module.css';

interface ButtonProps extends React.PropsWithChildren {
	disabled?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
	return (
		<button className={s.btn} {...props}>
			{children}
		</button>
	);
};

export default Button;
