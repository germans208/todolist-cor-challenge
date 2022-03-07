import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { Card, Grid } from '@material-ui/core';
import SelectField from './SelectField';
import choicesPriority from '../data/priority';
import choicesStatus from '../data/status';

const FilterForm = ({ filterByStatus, filterByPriority, orderByStatus }) => {

    const [value, setValue] = useState({});

    const handleInputChange = useCallback((event) => {

        if (event.target.name === 'status') {
            filterByStatus(event.target.value);
        } else if (event.target.name === 'priority') {
            filterByPriority(event.target.value);
        } else {
            orderByStatus(event.target.value);
        }

        setValue({
            ...value,
            [event.target.name]: event.target.value
        });
    }, [setValue, filterByStatus, filterByPriority, orderByStatus, value]);

     // useEffect(() => {
    //     const newValue = { id: 'TODOS', name: 'TODOS' }
    //     choicesPriority.unshift(newValue)
    //     choicesStatus.unshift(newValue)
    // }, [value])

    return (
        <div>
            <Card>
                <Grid container>
                    <Grid item xs={3}>
                        <SelectField
                            name="priority"
                            placeholder="Prioridad"
                            value={value.priority}
                            onChange={handleInputChange}
                            choices={choicesPriority}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <SelectField
                            name="status"
                            placeholder="Estado"
                            value={value.status}
                            onChange={handleInputChange}
                            choices={choicesStatus}
                        />
                    </Grid>
                </Grid>
            </Card>

            <Card>
                <Grid container>
                    <Grid item xs={3}>
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
        </div>
    )
}

//Disparador de Acciones
const mapDispatchToProps = (dispatch) => {
    return ({
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
