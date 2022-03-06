import { Grid, IconButton, Paper } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React from 'react';

const Item = ({ item, onClickRemove }) => {
    return (
        <Grid
            xs={12}
            item
        >
            <Paper elevation={2} >
                <span>{item}</span>
                <IconButton
                    color="secondary"
                    aria-label="Delete"
                    onClick={() => onClickRemove(item)}
                >
                    <Delete fontSize="small" />
                </IconButton>
            </Paper>
        </Grid>
    );
}

export default Item;
