import React, { FC } from 'react';
import FieldItem from './FieldItem';

interface FieldRowProps {
	index: number;
	size: number;
}

const FieldRow: FC<FieldRowProps> = ({ index, size }) => {
	return (
		<tr>
			{Array(size)
				.fill(null)
				.map(() => (
					<FieldItem key={Math.random()} rowIndex={index + 1} />
				))}
		</tr>
	);
};

export default FieldRow;
