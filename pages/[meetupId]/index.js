import { Fragment } from "react";

function MeetupDetails(props) {

    return (
        <Fragment>
            <img src={props.meetupData.image} alt={props.meetupData.title} />
            <h1> {props.meetupData.title} </h1>
            <address>{props.meetupData.address}</address>
            <p>{props.meetupData.description}</p>
        </Fragment>
    )
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                },
            },
            {
                params: {
                    meetupId: 'm2'
                }
            }
        ]
    }
}

export async function getStaticProps(context) { //this code runs during build time

    const meetupId = context.params.meetupId;
    console.log(meetupId)
    return {
        props: {
            meetupData: {
                image: 'https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                id: meetupId,
                title: 'First Meetup',
                address: 'Crew street',
                description: 'this is 1st meetup'
            }
        }
    }
}

export default MeetupDetails;