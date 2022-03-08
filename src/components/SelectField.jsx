import React from 'react';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core';

const SelectField = ({ value, name, placeholder, onChange, choices, allItems, error }) => {

    return (
        <FormControl 
            variant="outlined" 
            size="small" 
            error={Boolean(error)}
            style={{ width: "100%" }}
        >
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
                {allItems &&
                    <MenuItem key={0} value={'TODOS'}>
                        {'TODOS'}
                    </MenuItem>
                }

                {choices.map((item, i) => (
                    <MenuItem key={i} value={item.id}>
                        {item.name}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText>{error}</FormHelperText>
        </FormControl>

    );
}

export default SelectField;
