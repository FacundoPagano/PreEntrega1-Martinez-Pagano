import React from 'react'

const CharCard = ({name,species,status,image}) => {
  return (
<div className="card w-96 flex bg-base-300 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{species} - {status}</p>
  </div>
  <figure><img src={image} alt="Shoes" /></figure>
</div>
  )
}

export default CharCard