import React, { useCallback, useState } from 'react';
import { Card, CardActions, CardContent, Chip, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import { Delete, Save } from '@material-ui/icons';
import { Edit } from '@material-ui/icons';
import choicesPriority from '../data/priority';
import choicesStatus from '../data/status';
import SelectField from './SelectField';
import { green, orange, red } from '@material-ui/core/colors';

const useStyles = makeStyles({
    card: {
        maxWidth: 275,
        height: '95%',
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid grey',
        marginTop: '16px',
        marginLeft: '10px',
    },
    header: {
        marginTop: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '1em'
    },

});

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

    const getColor = (value) => {
        switch (value) {
            case 'ALTA':
                return red[200];
            case 'MEDIA':
                return orange[200];
            case 'BAJA':
                return green[200];
            default:
                return "primary";
        }
    }

    return (
        <Grid item key={0} xs={12} sm={6} md={6} lg={4}>
            <Card className={classes.card}>
                <CardContent>
                    <div className={classes.header}>
                        {editValue ?
                            <SelectField
                                name="priority"
                                placeholder="Prioridad"
                                value={value.priority}
                                onChange={handleInputChange}
                                choices={choicesPriority}
                            />
                            :
                            <Chip label={priority} size="small" style={{ backgroundColor: getColor(priority) }} />
                        }
                        {editValue ?
                            <SelectField
                                name="status"
                                placeholder="Estado"
                                value={value.status}
                                onChange={handleInputChange}
                                choices={choicesStatus}
                            />
                            :
                            <Chip label={status} size="small" variant="outlined" />
                        }
                    </div>
                    <Typography variant="body2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    {editValue ?
                        <IconButton
                            color="primary"
                            aria-label="Edit"
                            onClick={() => {
                                onClickEdit(value);
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

