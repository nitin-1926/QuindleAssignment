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
        const userID = this.props.userID;
        return (
            <Grid item component={Card} xs={6} md={3} className={styles.card}>
                <CardContent>
                    <h2>User Id: {userID}</h2>
                    <h4>Tasks:</h4> 
                    {resultArray.forEach( task => { 
                            return (
                                <div>
                                    <span>Task title: {task.title}</span>
                                    <span>Is Completed: {task.completed ? 'TRUE' : 'FALSE'}</span>
                                </div>
                            );
                        })}  
                </CardContent>
            </Grid>
        )
        // return (
        //     <div>
        //         {
        //             resultArray !== null && Object.keys(resultArray).map((key, i) => {
        //                return ( <p key={i}>
        //                 <span>User Id: {key}</span>
        //                 <span>Title: {resultArray[key]}</span>
        //                 </p> )
        //             }
        //             )
        //         }
        //     </div>
        // );
    }
}

export default Cards;