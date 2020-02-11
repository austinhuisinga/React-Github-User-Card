import React from 'react';
import { 
  CardDiv,
  CardImg,
  ContainerDiv
 } from '../stylez';

const UserCard = props => {
  return (
    <ContainerDiv>
    <CardDiv className='card-container'>
      <CardImg src={props.card.avatar_url} />
      <div className='user-data'>
        <h1>{props.card.name}</h1>
        <h4>{props.card.login}</h4>
        <h4>{props.card.location}</h4>
        <h4>{props.card.bio}</h4>
      </div>

    </CardDiv>
    </ContainerDiv>
  )
}

export default UserCard;