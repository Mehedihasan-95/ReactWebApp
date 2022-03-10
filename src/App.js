import { React, useState } from 'react'
import './App.scss';
import Header from './header/header';
import Sidenav from './sidenav/sidenav';
import { Tabs, Tab, Form, FormControl } from 'react-bootstrap';
import ViewBoxs from './component/viewBoxs'

import iconTeamsBlack from './assets/icons/icon-teams-black.svg';


const App = () => {


  const [key, setKey] = useState('all');


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
              <img className='img-fliud opacity-50' src={iconTeamsBlack} width="30" />
              <h3 className='m-0 font-weight-600 pl-2'>Teams</h3>
            </div>

            {/* create new team button  */}
            <button className='create-new-btn d-flex align-items-center text-uppercase'><span className="material-icons mr-3">add</span>
              Create New Team</button>
          </div>

          {/* filter tab button & search filter*/}
          <div className='d-flex bg-white justify-content-between align-items-center pt-3 px-3'>
            <div className='filter-buttons'>

              <Tabs onSelect={(k) => setKey(k)} defaultActiveKey="all" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="all" title="All">
                  {key}
                </Tab>
                <Tab eventKey="fav" title="Fav">
                  {key}
                </Tab>
                <Tab eventKey="arc" title="Arc" >
                  {key}
                </Tab>
              </Tabs>

            </div>

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

          <ViewBoxs />
        </div>
      </div>
    </>


  )
}

export default App;
