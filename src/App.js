import { React, useState } from 'react'
import './App.scss';
import Header from './header/header';
import Sidenav from './sidenav/sidenav';
import { Form, FormControl, Nav } from 'react-bootstrap';
import ViewBoxs from './component/viewBox/viewBoxs'
import iconTeamsBlack from './assets/icons/icon-teams-black.svg';
import ActivitiesCard from './component/activitiesCard'
import dataObj from './assets/data/data.json'



const personActivity = dataObj.activities;
const teamInformation = dataObj.teams;
const App = () => {

  const [data, setData] = useState(teamInformation);
  const [header, setHeader] = useState("All Data");

  const filterAllData = () => {
    setData(teamInformation.filter(teamInfo => teamInfo))
    setHeader("All Data")
  }

  const filterFavData = () => {
    setData(teamInformation.filter(teamInfo => teamInfo.is_favorited))
    setHeader("Favorites")
  }
  const filterArcData = () => {
    setData(teamInformation.filter(teamInfo => teamInfo.is_archived))
    setHeader("Archived")
  }

  return (
    <>
      <Header />
      <div className='d-flex'>
        <Sidenav />

        {/* layout header */}
        <div className='layout-header h-100 w-100'>
          <div className='header-content d-flex bg-white justify-content-between align-items-center p-3'>

            {/* title & icon  */}
            <div className='header-title d-flex align-items-center'>
              <img alt="" className='img-fliud opacity-50' src={iconTeamsBlack} width="30" />
              <h3 className='m-0 font-weight-600 pl-2'>Teams</h3>
            </div>

            {/* create new team button  */}
            <button className='create-new-btn d-flex align-items-center text-uppercase'><span className="material-icons mr-3">add</span>
              Create New Team</button>
          </div>

          {/* filter tab button & search filter*/}
          <div className='d-flex bg-white justify-content-between align-items-center pt-3 px-3'>
            <Nav className='nav-link-btn' variant="pills" defaultActiveKey="all data">
              <Nav.Item>
                <Nav.Link eventKey="all data"><button className='tabBtn' onClick={filterAllData}>All</button></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Favorites"> <button className='tabBtn' onClick={filterFavData}>Favorites</button></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Archived"><button className='tabBtn' onClick={filterArcData}>Archived</button></Nav.Link>
              </Nav.Item>
            </Nav>

            {/* Search button */}
            <div className='d-flex align-items-center'>
              <button className='search-btn pt-2'><span className="material-icons">search</span></button>
              <Form >
                <FormControl
                  type="search"
                  placeholder="Search team name..."
                  className="search-field"
                  aria-label="Search"
                />
              </Form>
            </div>
          </div>


          <div className='d-flex m-4_5 align-items-start justify-content-between'>
            <div className='col-9 pr-4_5'>
              <ViewBoxs teamInfos={data} header={header} itemCount={data.length} allData={teamInformation.length} />
            </div>
            {/* Activities */}
            <div className='col-3 w- bg-white box-shadow-default'>

              <div className='header-title border-bottom-1'>
                <div className='p-3 d-flex justify-content-between align-items-center'>
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
      </div>
      {/* </div> */}
    </>


  )
}

export default App;
