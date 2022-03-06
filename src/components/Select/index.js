import React from 'react';

const Select = ({ value, changeValue }) => {
    const choices = [
        { id: '1', name: 'NUEVA' },
        { id: '2', name: 'EN PROCESO' },
        { id: '3', name: 'FINALIZADA' },
    ]
console.log(value)
    return (
        <select
            id="simple"
            value={value}
            onChange={(e) => changeValue(value, e)}
        >
            {choices.map((item) => (
                <option value={item.id}>{item.name}</option>

            ))}
        </select>
    );
}

export default Select;
