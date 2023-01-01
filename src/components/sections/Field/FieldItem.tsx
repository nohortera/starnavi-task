import React, {FC, useContext, useRef, useState} from 'react';
import s from '../../../styles/sections/Field/FieldItem.module.css'
import {LoggerContext} from "../../../context/loggerContext";

interface FieldItemProps {
    rowIndex: number
}

const FieldItem: FC<FieldItemProps> = ({rowIndex}) => {
    const ref = useRef<HTMLTableDataCellElement>(null)
    const [isBlue, setIsBlue] = useState<boolean>(false)
    const {addLog} = useContext(LoggerContext)

    const changeColor = (e: React.MouseEvent): void => {
        setIsBlue(prev => !prev)
        if (ref.current) {
            addLog(`row ${rowIndex} col ${ref.current?.cellIndex + 1}`)
        }
    }
    return (
        <td ref={ref} onMouseOver={changeColor} className={[s.squareItem, isBlue ? s.squareItemBlue : ''].join(' ')}></td>
    );
};

export default FieldItem;
