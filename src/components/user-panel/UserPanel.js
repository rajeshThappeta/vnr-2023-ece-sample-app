import React from 'react'
import {useSelector} from 'react-redux'

function UserPanel() {
  let {userObj}=useSelector(state=>state.login)
  return (
    <div className='row pt-5 container'>
      <div className="col-sm-4">
        <img src={userObj.profileImage} alt="" />
      </div>
      <div className="col-sm-8 text-center">
            <p className="display-5">{userObj.username}</p>
            <p className="display-6">{userObj.email}</p>
            <p className="display-6">{userObj.dob}</p>
      </div>
    </div>
  )
}


export default UserPanel;