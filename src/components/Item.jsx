import { Button, Card, CardActions, CardContent, CardHeader, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: '0.5rem 0',
    }
});

const Item = ({ value, onClickRemove }) => {
    const classes = useStyles();

    return (
        <Grid item key={0} xs={12} sm={6} md={6} lg={4}>
            <Card className={classes.card}>
                <CardHeader
                    title={`Prioridad: ${value.priority}`}
                    subheader={`Estado: ${value.status}`}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h6">
                        Titulo: {value.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Descripcion: {value.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        EDITAR
                    </Button>
                    <IconButton
                        color="secondary"
                        aria-label="Delete"
                        onClick={() => onClickRemove(value)}
                    >
                        <Delete fontSize="small" />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default Item;
