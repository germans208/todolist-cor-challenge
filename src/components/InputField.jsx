import { TextField } from '@material-ui/core';
import React from 'react';

const InputField = ({ name, placeholder, onChange }) => {

    return (
        <TextField
            name={name}
            variant="outlined"
            placeholder={placeholder}
            onChange={onChange}
            style={{ width: "100%" }}
            size="small"
        />
    )
}

export default InputField;
