import React from 'react';
import UserCard from './UserCard';

const UserList = props => {

  return(
    <div>
      <h2>{props.userData.name}</h2>
      <UserCard card={props.userData} />

      {props.followersData.map(card => (
        <UserCard key={card.id} card={card} />
      ))}
    </div>

  )
}

export default UserList;