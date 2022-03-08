import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import SelectField from './SelectField';
import choicesPriority from '../data/priority';
import choicesStatus from '../data/status';
import { Card, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        marginTop: '16px',
        border: '2px solid grey',
        borderRadius: '10px',
        padding: '10px',
        
    }
});

const FilterForm = ({ filterAll, filterByStatus, filterByPriority, orderByStatus }) => {
    const classes = useStyles();
    const [value, setValue] = useState({});

    const handleInputChange = useCallback((event) => {

        if (event.target.name === 'status') {
            filterByStatus(event.target.value);
        } else if (event.target.name === 'priority') {
            filterByPriority(event.target.value);
        } else {
            orderByStatus(event.target.value);
        }

        if (event.target.value === 'TODOS') {
            filterAll(event.target.value);
        }

        setValue({
            ...value,
            [event.target.name]: event.target.value
        });
    }, [setValue, filterAll, filterByStatus, filterByPriority, orderByStatus, value]);

    return (
        <Card className={classes.card}>
            <Grid container spacing={1}>
                <Grid item xs={9}>
                    <Grid container spacing={1}>
                        <Grid item xs={4}>
                            <SelectField
                                name="priority"
                                placeholder="Filtrar por prioridad"
                                value={value.priority}
                                onChange={handleInputChange}
                                choices={choicesPriority}
                                allItems={true}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <SelectField
                                name="status"
                                placeholder="Filtrar por estado"
                                value={value.status}
                                onChange={handleInputChange}
                                choices={choicesStatus}
                                allItems={true}
                            />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={3} sx={{ ml: 6 }}>
                    <SelectField
                        name="order"
                        placeholder="Ordenar Por"
                        value={value.order}
                        onChange={handleInputChange}
                        choices={[{ id: 'asc', name: 'ESTADO ASC' }, { id: 'desc', name: 'ESTADO DESC' }]}
                        fullWidth
                    />
                </Grid>
            </Grid>
        </Card>
    )
}

const mapDispatchToProps = (dispatch) => {
    return ({
        filterAll: (value) => {
            dispatch({ type: 'FILTER_ALL', payload: value })
        },
        filterByStatus: (value) => {
            dispatch({ type: 'FILTER_BY_STATUS', payload: value })
        },
        filterByPriority: (value) => {
            dispatch({ type: 'FILTER_BY_PRIORITY', payload: value })
        },
        orderByStatus: (value) => {
            dispatch({ type: 'ORDER_BY_STATUS', payload: value })
        }
    })
}

export default connect(null, mapDispatchToProps)(FilterForm);
