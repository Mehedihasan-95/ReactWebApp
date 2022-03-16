import React from 'react';
import './sidenav.scss'
import logo from './../assets/icons/sw-logo-white.svg';
import iconCampaign from './../assets/icons/icon-campaign.svg';
import iconTeams from './../assets/icons/icon-teams.svg';
import iconLeads from './../assets/icons/icon-leads.svg';
import iconReports from './../assets/icons/icon-reports.svg';
import iconHelp from './../assets/icons/icon-help.svg';

const Sidenav = () => {
    return (
        <div className='side-nav bg-Maastricht vh-100 w-4rem'>
            <div className='d-flex flex-column justify-content-between h-100'>
                {/* Logo & Nav menu */}
                <div>
                    {/* logo */}
                    <a className="d-block py-3 px-0 text-center" href="#">
                        <img alt="" src={logo} />
                    </a>
                    <nav className="navbar">
                        <ul className="navbar-nav w-100">

                            <li className="nav-item ">
                                <a className="nav-link" href="#">
                                    <img alt="" src={iconCampaign} height="25" />
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">
                                    <img alt="" src={iconTeams} height="25" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <img alt="" src={iconLeads} height="25" />
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <img alt="" src={iconReports} height="25" />
                                </a>
                            </li>

                        </ul>
                    </nav>
                </div>

                {/* Help button  */}
                <div className='nav-item'>
                    <a className="nav-link" href="#">
                        <img alt="" className='img-fluid' src={iconHelp} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidenav