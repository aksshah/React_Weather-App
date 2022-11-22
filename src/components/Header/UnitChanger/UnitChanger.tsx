import { useState } from 'react';
import './UnitChanger.css';

interface Props {
    onUnitChange: (arg: string) => void;
}

export const UnitChanger: React.FC<Props> = ({ onUnitChange }) => {
    const [degreeUnit, setDegreeUnit] = useState<string>('C');

    const updateUnit = (unit: string) => {
        unit = (unit == 'C' ? 'F' : 'C');
        setDegreeUnit(unit);
        onUnitChange(unit);
    }

    return (
        <div className='unit_changer'>
            <button
                type="button"
                className={degreeUnit == 'C' ? 'active' : 'inactive'}
            >°C</button>
            <input
                type="checkbox"
                className="toggle"
                id="toggle_unit"
                title="Toggle temperature unit"
                value={degreeUnit}
                onChange={e => updateUnit(degreeUnit)}></input>
            <label htmlFor="toggle_unit"></label>
            <button
                type="button"
                className={degreeUnit == 'F' ? 'active' : 'inactive'}
            >°F</button>
        </div>
    )
};
