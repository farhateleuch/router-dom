import React from 'react'
import Address from './Component/Profile.js/Address'
import Name from './Component/Profile.js/Name'
import ProfilePhoto from './Component/Profile.js/ProfilePhoto'
import './style.css'


function App() {
  return (
    <div style={{backgroundColor:'cornflowerblue'}}   >
      <Name/>
     <ProfilePhoto/>
      <Address/>
    </div>
  )
}

export default App
