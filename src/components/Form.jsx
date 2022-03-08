import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardActions, Grid, makeStyles } from '@material-ui/core';
import InputField from './InputField';
import SelectField from './SelectField';
import choicesPriority from '../data/priority';
import choicesStatus from '../data/status';

const useStyles = makeStyles({
    root: {
        marginTop: '16px'
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        alignSelf: 'flex-start'
    },
    button: {
        marginTop: '16px',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    card: {
        marginTop: '16px',
        border: '2px solid grey',
        borderRadius: '10px',
        padding: '10px',
    }
});

const Form = ({ addItem }) => {
    const classes = useStyles();

    const [value, setValue] = useState({
        title: null,
        description: null,
        priority: null,
        status: null,
        id: 0,
    });

    const [errors, setErrors] = useState('')

    const onSubmit = useCallback((event) => {
        event.preventDefault();
        setErrors('');

        if (value.title === undefined || value.description === undefined ||
            value.priority === undefined || value.status === undefined || 
            value.title === null || value.description === null ||
            value.priority === null || value.status === null) {
            setErrors('Requerido');
            return false
        }

        addItem(value);
        setValue({});
        event.currentTarget.reset();
    }, [setValue, addItem, value]);

    const handleInputChange = (event) => {
        setValue({
            ...value,
            [event.target.name]: event.target.value
        })
    }
    console.log(errors);
    return (
        <div>
            <form onSubmit={onSubmit}>
                <Card className={classes.card}>
                    <Grid container className={classes.root}>
                        <div className={classes.title}>
                            <Grid item xs={3}>
                                <InputField
                                    name="title"
                                    placeholder="Titulo"
                                    onChange={handleInputChange}
                                    error={errors}
                                />
                            </Grid>
                            <Grid item xs={3} >
                                <SelectField
                                    name="priority"
                                    placeholder="Prioridad"
                                    value={value.priority}
                                    onChange={handleInputChange}
                                    choices={choicesPriority}
                                    error={errors}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <SelectField
                                    name="status"
                                    placeholder="Estado"
                                    value={value.status}
                                    onChange={handleInputChange}
                                    choices={choicesStatus}
                                    error={errors}
                                />
                            </Grid>
                        </div>
                        <Grid item xs={12} className={classes.root}>
                            <InputField
                                name="description"
                                placeholder="Descripción"
                                onChange={handleInputChange}
                                error={errors}
                            />
                        </Grid>
                    </Grid>

                    <div className={classes.button}>
                        <CardActions>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                size="small"
                            >
                                Crear tarea
                            </Button>
                        </CardActions>
                    </div>

                </Card>
            </form>
        </div>
    )
}

let todoId = 1

//Disparador de Acciones
const mapDispatchToProps = (dispatch) => {
    return ({
        addItem: (value) => {
            //dispatch({ type: 'ADD_ITEM', payload: { value } })
            dispatch({ type: 'ADD_ITEM', payload: { ...value, id: todoId++ } })
        }
    })
}

export default connect(null, mapDispatchToProps)(Form);
