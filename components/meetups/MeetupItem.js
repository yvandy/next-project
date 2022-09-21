import React from 'react';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { Router, useRouter } from 'next/router';

function MeetupItem(props) {
    const router = useRouter();

    function showDetailHandler() {
        router.push('/' + props.id)
        console.log(router)
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                </div>
                <div className={classes.actions}>
                    <button onClick={showDetailHandler}>Show Details</button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem