import React from 'react';

const UserCard = props => {
  return (
    <div className='card-container'>
      <img src={props.card.avatar_url} />
      <div className='user-data'>
        <h1>{props.card.name}</h1>
        <h4>{props.card.login}</h4>
        <h4>{props.card.location}</h4>
      </div>

      <div className='followers'>
        <h4>{props.followersLogin}</h4>

      </div>
    </div>
  )
}

export default UserCard;