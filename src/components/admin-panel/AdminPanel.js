import {useState,useEffect} from 'react'
import './AdminPanel.css'
import axios from 'axios'

function AdminPanel() {


    let [users,setUsers]=useState([])

  async function getAllUsers(){
    let res=await axios.get('http://localhost:4000/users')
    setUsers(res.data)
  }

    useEffect(()=>{
      getAllUsers()
    },[])

  return (
    <div className='container'>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 pt-4">
        {
          users.map(userObj=><div className='col' key={userObj.id}>
            <div className="card">
              <img src={userObj.profileImage} className='w-100' alt="" />
              <div className="card-body">
                <p className="lead">{userObj.username}</p>
                <p className="lead">{userObj.email}</p>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  )
}

export default AdminPanel