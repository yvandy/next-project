import Head from 'next/head'
import MeetupList from '../components/meetups/meetups/MeetupList'

const DUMMY_MEETUPS = [
  {
    id:'m1',
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

export default function Home() {
  return <MeetupList meetups={DUMMY_MEETUPS} />
}
