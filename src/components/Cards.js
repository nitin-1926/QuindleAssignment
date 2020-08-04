import React from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';
import styles from './Cards.module.css';

class Cards extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            data: {},
        }
    }

    render() {
        const resultArray = this.props.resultArray;
        return (
            <Grid item component={Card} xs={6} md={3} className={styles.card}>
                <CardContent>
                <ul>
                    <li>User Id: {resultArray.userId}</li>
                    <li>Task Title: {resultArray.title}</li>
                    <li>Is Task completed: {(resultArray.completed) ? 'true' : 'false'}</li>
                </ul>
                </CardContent>
            </Grid>
        );
    }
}

export default Cards;