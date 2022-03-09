import React from 'react'
import './header.scss'
import iconNotify from '../assets/icons/icon-mail.svg'
import dataJson from '../assets/data/data.json'

const Header = () => {
    return (
        <div className='header-pannel'>
            <div className='h-100 d-flex flex-wrap align-items-center'>
                <div className='col-1 h-100 d-flex justify-content-center align-items-center border-right-1 '>
                    <h6 className='m-0 text-gray'>NARWHAL</h6>
                </div>
                <div className='col-1 text-center'>
                    <h6 className='m-0'>Teams</h6>
                </div>
                <div className='col-10 pr-3'>
                    <div className='d-flex justify-content-end align-items-center'>
                        {/* notification icon */}
                        <div className='position-relative mr-3'>
                            <div className='notify-Count'>{dataJson.current_user.notifications_count}</div>
                            <div className='notify-icon'>
                                <img src={iconNotify} />
                            </div>
                        </div>
                        {/* user name & avatar */}
                        <div className='user-name'>
                            <p className='m-0'>Hello, {dataJson.current_user.name}</p>
                        </div>
                        <div className='user-img px-2 cursor-pointer'>
                            <img className='img-fluid' src={dataJson.current_user.avatar} width="25" />
                        </div>
                        <div className='arrow-down '></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header