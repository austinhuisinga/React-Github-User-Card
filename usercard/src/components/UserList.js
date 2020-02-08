import React from 'react';
import UserCard from './UserCard';
const UserList = props => {

  return(
    <div>
      <h2>{props.userData.name}</h2>
      <UserCard card={props.userData} />
      {/* {props.followers.map(person => (
        <div key={person.id} className='person'>
          <h3>{props.followersLogin}</h3>
        </div>
      ))} */}
    </div>

  )
}

export default UserList;