import React from 'react'
import './User.css'
 const UserCard = ({user}) => {
  return (
    <div className="cil-md-4 my-3">
      <div className="card" >
        <img src="" alt=""/>
        <div className="card-body" >
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text" >{user.email}</p>
          <p>{user.address.street}</p>
        </div>
      </div>
    </div>
  )
}

export default UserCard;
