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
        console.log(resultArray);
        return (
            <Grid item component={Card} xs={6} md={3} className={styles.card}>
                <CardContent>
                    <h1>User Id: {userID}</h1>
                    <h2>Tasks:</h2>
                    <p> 
                    {resultArray.map( value => { 
                            return (
                                <div>
                                    <span><b>Title:</b> {value.title}</span><br />
                                    <span><b>Is Completed:</b> {value.isCompleted ? 'TRUE' : 'FALSE'}</span><br /><br />
                                </div>
                            );
                        })}
                    </p>  
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