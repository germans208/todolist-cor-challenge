import { Card, CardActions, CardContent, CardHeader, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import { Delete, Save } from '@material-ui/icons';
import { Edit } from '@material-ui/icons';
import choicesPriority from '../data/priority';
import choicesStatus from '../data/status';
import React, { useCallback, useState } from 'react';
import SelectField from './SelectField';

const useStyles = makeStyles({
    card: {
        height: '95%',
        display: 'flex',
        flexDirection: 'column',
        margin: '0.5rem 0',
        marginTop: 10,
        marginLeft: 10,
    }
});
//Cambie VALUE por cada proopiedad anterior: value.title

const Item = ({ id, title, description, status, priority, onClickRemove, onClickEdit }) => {
    const classes = useStyles();
    const [editValue, setEditValue] = useState(false);

    const [value, setValue] = useState({
        id: id,
        title: title,
        description: description,
        priority: priority,
        status: status
    });

    const handleInputChange = useCallback((event) => {
        event.preventDefault();
        setValue({
            ...value,
            [event.target.name]: event.target.value
        });
    }, [setValue, value]);

    const handleEdit = () => {
        setEditValue(true);
    }

    return (
        <Grid item key={0} xs={12} sm={6} md={6} lg={4}>
            <Card className={classes.card}>

                <CardHeader

                    title={editValue ?
                        <SelectField
                            name="priority"
                            placeholder="Prioridad"
                            value={value.priority}
                            onChange={handleInputChange}
                            choices={choicesPriority}
                            fullWidth
                        /> : `Prioridad: ${priority}`
                    }

                    subheader={editValue ?
                        <SelectField
                            name="status"
                            placeholder="Estado"
                            value={value.status}
                            onChange={handleInputChange}
                            choices={choicesStatus}
                        /> : `Estado: ${status}`
                    }

                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h6">
                        Titulo: {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Descripcion: {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    {editValue ?
                        <IconButton
                            color="primary"
                            aria-label="Edit"
                            onClick={() => {
                                onClickEdit(value);//TODO EL OBJETO
                                setEditValue(false);
                            }}
                        >
                            <Save fontSize="small" />
                        </IconButton>
                        :
                        <IconButton
                            color="primary"
                            aria-label="Edit"
                            onClick={handleEdit}
                        >
                            <Edit fontSize="small" />
                        </IconButton>
                    }
                    <IconButton
                        color="secondary"
                        aria-label="Delete"
                        onClick={() => onClickRemove(id)}
                    >
                        <Delete fontSize="small" />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default Item;

