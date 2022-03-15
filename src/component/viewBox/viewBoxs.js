import './viewBoxs.scss'
import dataObj from '../../assets/data/data.json'

const ViewBoxs = () => {

    return (
        <>
            {/* All Items List */}
            <div className='bg-white box-shadow-default' >
                <div className='header-title border-bottom-1 '>
                    <div className=' p-3 d-flex justify-content-between align-items-center'>
                        <h6 className='m-0 font-weight-600 '>All Teams</h6>
                        <h6 className='m-0 font-size-0_8rem opacity-50'>Showing 55 of 55 items</h6>
                    </div>
                </div>

                {/* Box Content */}
                <div className='p-3'>
                    {dataObj.teams.map((teamInfo) => {
                        console.log(teamInfo);
                        return <div className='d-flex flex-wrap'>
                            <div className='col-4 p-2'>
                                <div className={`${teamInfo?.is_archived ? 'archived' : ''} border-1px border-radius-4`}>
                                    <div className='p-3'>
                                        <div className='d-flex justify-content-between align-items-start pb-2'>
                                            <div className='d-flex'>
                                                <div className='title-img'>
                                                    <img className='border-radius-4' src={teamInfo?.image} width="35" height="35" />
                                                </div>
                                                <div className='title-text pl-2'>
                                                    <h6 className='font-weight-600'>{teamInfo.name}</h6>
                                                    <p className='font-size-0_7rem opacity-50'>{teamInfo.created_at} </p>
                                                </div>
                                            </div>
                                            <div className='fev-star'>
                                                <span className={`material-icons font-size-1_3rem ${teamInfo.is_favorited ? 'yellow' : 'opacity-50'}`}>
                                                    {teamInfo.is_favorited ? 'star' : 'star_outline'}
                                                </span>

                                            </div>
                                        </div>
                                        <div>
                                            <p className='font-size-0_8rem textLimit '>{teamInfo.description} </p>
                                        </div>
                                    </div>
                                    <div className='border-top-1'>
                                        <div className='p-3 d-flex align-items-center opacity-50'>
                                            <span className="material-icons font-size-1rem">question_answer</span>
                                            <p className='font-size-0_8rem ml-1'>{teamInfo.campaigns_count} Campaigns</p>
                                            <span className="material-icons font-size-1rem ml-3">people</span>
                                            <p className='font-size-0_8rem ml-1'>{teamInfo.leads_count} Leads</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </>



    )
}

export default ViewBoxs