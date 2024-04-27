import React from 'react'
import Login from '../../login/Login'
import Sidebar from '../../SIdebar/Sidebar'
import AddAdmin from '../Add/Addadmin/AddAdmin'
import Addcriminal from '../Add/Addcriminal/Addcriminal'
import EditProfile from '../Profile/EditProfile'
import Profile from '../Profile/Profile'

import SearchBar from '../searchBar/SearchBar'

import Viewall from '../Viewall/Viewall'

import './sectionContainer.css'

function SectionContainer() {
  return (
    <div className='sectionContainer'>
        <div className="section">
            <Sidebar />
          <div className='contents-x'>
            {/* <Login /> */}
            {/* <Profile /> */}
            <EditProfile />
            {/* <Addcriminal /> */}

            <SearchBar />

            {/* <Viewall /> */}
            {/* <AddAdmin /> */}

          </div>
        </div>

    </div>
  )
}

export default SectionContainer