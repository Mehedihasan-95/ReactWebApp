
const ActivitiesCard = ({ activity }) => {
    console.log(activity);
    return (
        <div className='d-flex align-items-start py-2'>
            <div className='user-img px-2'>
                <img className='img-fluid' src={activity.person?.avatar} width="30" />
            </div>
            {/* activities title */}
            <div className='activities-title'>
                <p className='m-0 opacity-75 font-size-0_9rem'><strong>{activity.person.name}</strong> increased <strong>{activity.target}</strong>'s quota.</p>
                <p className='m-0 font-size-0_7rem opacity-50'><strong> {activity.created_at} </strong></p>
            </div>
        </div>
    )
}

export default ActivitiesCard