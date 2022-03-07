import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';

const SelectField = ({ value, name, placeholder, onChange, choices }) => {
    return (
        <FormControl variant="outlined" size="small" style={{ width: "100%" }}>
            <InputLabel id={placeholder}>
                {placeholder}
            </InputLabel>
            <Select
                labelId={placeholder}
                label={placeholder}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            >
                {choices.map((item, i) => (
                    <MenuItem key={i} value={item.id}>
                        {item.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>

    );
}

export default SelectField;
