
import React from 'react';
import Form from '../components/Form';
import List from '../components/List';
import FilterForm from '../components/FilterForm';
import { Container, Grid, Typography } from '@material-ui/core';

const styles = {
    singleCol: {
        marginTop: '1em',
        marginBottom: '1em'
    },
};

const Main = () => {
    return (
        <Container sx={{ mt: 4 }} maxWidth="md" fixed>
            <Grid container spacing={0}>
                <Typography variant="h6">
                    COR - TODO LIST
                </Typography>
                <Grid item xs={12}>
                    <Form />
                </Grid>
                <Grid item xs={12} style={styles.singleCol}>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Filtrar por:
                    </Typography>
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
