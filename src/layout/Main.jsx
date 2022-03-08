
import React from 'react';
import Form from '../components/Form';
import List from '../components/List';
import FilterForm from '../components/FilterForm';
import { Container, Grid, Typography } from '@material-ui/core';

const styles = {
    filter: {
        marginTop: '10px'
    },
};

const Main = () => {
    return (
        <Container maxWidth="md" fixed>
            <Grid container spacing={0}>
                <Typography variant="h6">
                    COR - TODO LIST
                </Typography>
                <Grid item xs={12}>
                    <Form />
                </Grid>
                <Grid item xs={12} style={styles.filter}>
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
