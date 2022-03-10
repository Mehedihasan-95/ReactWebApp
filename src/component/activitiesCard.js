
const ActivitiesCard = ({ activity }) => {
    let actionText = activity.action.split('_')

    const activeAction = activity.action;
    switch (activeAction) {
        case 'increased_quota':
            actionText = <> <strong>{activity.person.name}</strong> {actionText[0]} <strong>{activity.target}</strong>'s  {actionText[1]} </>;
            break;
        case 'added_leads':
            actionText = <> <strong>{activity.person.name}</strong> {actionText[0]} new {actionText[1]} to <strong>{activity.target}</strong></>;
            break;
        case 'archived_team':
            actionText = <><strong> {activity.person.name} </strong> {actionText[0]} the {actionText[1]} <strong>{activity.target} </strong></>;
            break;
        default:
            break;
    }

    console.log(actionText)
    return (

        <div className='d-flex align-items-start py-2'>
            <div className='user-img px-2'>
                <img className='img-fluid' src={activity.person?.avatar} width="30" />
            </div>
            {/* activities title */}
            <div className='activities-title'>
                <p className="m-0"> {actionText}</p>
                <p className='m-0 font-size-0_7rem opacity-50'><strong> {activity.created_at} </strong></p>
            </div>
        </div>
    )
}

export default ActivitiesCard