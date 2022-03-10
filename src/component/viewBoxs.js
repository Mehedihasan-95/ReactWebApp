import React from 'react'
import ActivitiesCard from '../component/activitiesCard'
import dataObj from '../assets/data/data.json'

const personActivity = dataObj.activities;

const ViewBoxs = () => {
    return (
        <div className='m-4_5'>
            <div className='d-flex justify-content-between align-items-start'>

                {/* All Items List */}
                <div className='col-9 bg-white box-shadow-default'>
                    {/* header */}
                    <div className='header-title border-bottom-1 '>
                        <div className=' p-3 d-flex justify-content-between align-items-center'>
                            <h6 className='m-0 font-weight-600 '>All Teams</h6>
                            <h6 className='m-0 font-size-0_8rem opacity-50'>Showing 55 of 55 items</h6>
                        </div>
                    </div>

                    {/* Box Content */}
                    <div className='p-3'>

                    </div>
                </div>

                {/* Activities */}
                <div className='w-100 ml-4_5 bg-white box-shadow-default'>
                    {/* header */}
                    <div className='header-title border-bottom-1'>
                        <div className=' p-3 d-flex justify-content-between align-items-center'>
                            <h6 className='m-0 font-weight-600 '>Activity</h6>
                        </div>
                    </div>

                    {/* Activities list */}
                    <div className='p-3'>
                        {personActivity.map((activity) => {
                            return <ActivitiesCard key={activity.id} activity={activity} />
                        })}


                    </div>
                </div>

            </div>
        </div>
    )
}

export default ViewBoxs