import React from 'react'

function Movie(props) {
  return (
   <div className='continerItems'>
    <img src={props.pic} alt=''></img>
    <h3>{props.name}</h3>
     <h3>role:{props.role}</h3>
    <h3>team:{props.team}</h3>

  </div>
  )
}

export default Movie