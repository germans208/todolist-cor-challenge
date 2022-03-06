
import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Form from '../components/Form';
import List from '../components/List';
import { Grid } from '@material-ui/core';

const Main = () => {
    const styles = {
        Paper: {
            padding: 20,
            margin: "auto",
            textAlign: "center",
        }
    };

    return (
        <Paper style={styles.Paper}>
            <div style={{ display: 'flex' }}>
                <div style={{ marginLeft: '40%' }}>
                    <h1 style={{ textAlign: 'center' }}>
                        COR - TODO LIST
                    </h1>
                </div>

                <br />
                <div style={{ marginRight: '10%', marginTop: 13 }}>
                </div>

            </div>
            <Fragment>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Form />
                    </Grid>
                    <Grid item xs={12} style={styles.Paper}>
                        <List />
                    </Grid>
                </Grid>
            </Fragment>
        </Paper>
    );
}

export default Main;