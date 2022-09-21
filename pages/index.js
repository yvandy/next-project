
import MeetupList from '../components/meetups/MeetupList';
import React, { useEffect, useState } from 'react';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    address: 'London',
    description: 'This is a first meetup'
  },
  {
    id: 'm2',
    title: 'A First Meetup',
    image: 'https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    address: 'London',
    description: 'This is a first meetup'
  },
  {
    id: 'm3',
    title: 'A First Meetup',
    image: 'https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    address: 'London',
    description: 'This is a first meetup'
  }
]



export default function Home(props) {

  return (<React.Fragment>

    <MeetupList meetups={props.meetups} />

  </React.Fragment >)
}

// export async function getServerSideProps(context){
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export async function getStaticProps(){

  return { 
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10  // incremental static generation(it will wait for 10 sec then it will regenerate the page for incoming request)
  }
}
