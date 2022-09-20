import MeetupItem from './MeetupItem'

function MeetupList(props){
    return(
        <ul>
            {
                props.meetups.map((meetup) => (
                    <MeetupItem 
                        key={meetup.id}
                        id={meetup.id}
                        image={meetup.image}
                        title={meetup.title}
                        address={meetup.address}
                    />
                ))
            }
        </ul>
    )
}

export default MeetupList;