import React, {FC} from 'react';
import FieldRow from "./FieldRow";
import s from '../../../styles/sections/Field/Field.module.css'

interface FieldProps {
    size: number
}

const Field: FC<FieldProps> = ({size}) => {

    return (
        <table className={s.field}>
            <tbody>
                {Array(size).fill(null).map((_, index) => (
                    <FieldRow key={Math.random()} index={index} size={size} />
                ))}
            </tbody>
        </table>
    );
};

export default React.memo(Field);
