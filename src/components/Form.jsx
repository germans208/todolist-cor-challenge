import { Box, Button, Card, CardActions, CardContent, makeStyles } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { uid } from '../utils/functions';
import InputField from './InputField';
import SelectField from './SelectField';
import choicesPriority from '../data/priority';
import choicesStatus from '../data/status';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


const Form = ({ addItem }) => {
    const classes = useStyles();

    const [value, setValue] = useState({
        id: '',
        title: '',
        priority: '',
        status: '',
        description: ''
    });

    const onSubmit = useCallback((event) => {
        event.preventDefault()
        addItem(value)
        setValue({});
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
                    <CardContent>
                        <Box display={{ md: 'block', lg: 'flex' }}>
                            <Box flex={3} mr={{ md: 0, lg: '1em' }}>
                                <Box display={{ xs: 'block', sm: 'flex' }}>
                                    <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                                        <InputField
                                            name="title"
                                            placeholder="Titulo"
                                            onChange={handleInputChange}
                                        />
                                    </Box>
                                    <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                                        <SelectField
                                            name="priority"
                                            placeholder="Prioridad"
                                            value={value}
                                            onChange={handleInputChange}
                                            choices={choicesPriority}
                                            fullWidth
                                        />
                                    </Box>
                                    <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                                        <SelectField
                                            name="status"
                                            placeholder="Estado"
                                            value={value}
                                            onChange={handleInputChange}
                                            choices={choicesStatus}
                                        />
                                    </Box>
                                </Box>

                                <Box display={{ xs: 'block', sm: 'flex' }}>
                                    <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                                        <InputField
                                            name="description"
                                            placeholder="Descripcion"
                                            onChange={handleInputChange}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </CardContent>
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
            dispatch({ type: 'ADD_ITEM', payload: { value } })
        }
    })
}

export default connect(null, mapDispatchToProps)(Form);
