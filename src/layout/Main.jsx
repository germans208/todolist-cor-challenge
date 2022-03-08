
import React from 'react';
import Form from '../components/Form';
import List from '../components/List';
import FilterForm from '../components/FilterForm';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    filter: {
        marginTop: '10px'
    },
    header: {
        textAlign: "center",
    }
});

const Main = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="md" fixed>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <div className={classes.header}>
                        <Typography variant="h6" >
                            COR - TODO LIST
                        </Typography>
                    </div>
                    <Form />
                </Grid>
                <Grid item xs={12} className={classes.filter}>
                    <FilterForm />
                </Grid>
                <Grid item xs={12}>
                    <List />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Main;
