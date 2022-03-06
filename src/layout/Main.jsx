
import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Form from '../components/Form';
import List from '../components/List';
import { Container, Grid } from '@material-ui/core';

const Main = () => {

    return (
        <Container maxWidth="md" fixed>
            <h2 style={{ textAlign: 'center' }}>
                COR - TODO LIST
            </h2>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Form />
                </Grid>
                <Grid item xs={12}>
                    <List />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Main;