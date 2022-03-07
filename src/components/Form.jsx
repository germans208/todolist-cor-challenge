import { Button, Card, CardActions, Grid, makeStyles } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { uid } from '../utils/functions';
import InputField from './InputField';
import SelectField from './SelectField';
import choicesPriority from '../data/priority';
import choicesStatus from '../data/status';

const useStyles = makeStyles((theme) => ({
    root: {

    },
}));


const Form = ({ addItem }) => {
    const classes = useStyles();

    const [value, setValue] = useState({
        id: '',
        title: '',
        description: '',
        priority: '',
        status: ''
    });

    const onSubmit = useCallback((event) => {
        event.preventDefault()
        addItem(value)
        setValue({});
        event.currentTarget.reset();
    }, [setValue, addItem, value]);

    const handleInputChange = (event) => {
        setValue({
            ...value,
            id: uid(),
            [event.target.name]: event.target.value
        })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <Card className={classes.root}>
                    <Grid container>
                        <Grid item xs={3}>
                            <InputField
                                name="title"
                                placeholder="Titulo"
                                onChange={handleInputChange}
                            />
                        </Grid>
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
                        <Grid item xs={12}>
                            <InputField
                                name="description"
                                placeholder="Descripcion"
                                onChange={handleInputChange}
                            />
                        </Grid>
                    </Grid>

                    <CardActions>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Crear tarea
                        </Button>
                    </CardActions>
                </Card>
            </form>
        </div>
    )
}

//Disparador de Acciones
const mapDispatchToProps = (dispatch) => {
    return ({
        addItem: (value) => {
            //dispatch({ type: 'ADD_ITEM', payload: { value } })
            dispatch({ type: 'ADD_ITEM', payload: value })
        }
    })
}

export default connect(null, mapDispatchToProps)(Form);
