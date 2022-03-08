import React from 'react';
import { TextField } from '@material-ui/core';

const InputField = ({ name, placeholder, onChange, error }) => {

    return (
        <TextField
            name={name}
            variant="outlined"
            placeholder={placeholder}
            onChange={onChange}
            style={{ width: "100%" }}
            size="small"
            error={Boolean(error)}
            helperText={error}
        />
    )
}

export default InputField;
