import React from 'react'

const Card = (props) => {

  const { name, username } = props.dataUser

  return (
    <div key={1} style={{width: '300px', height: '450px', border: '1px solid black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h3>{name}</h3>
      <h3>{username}</h3>
    </div>
  )
}

export default Card
