import React from 'react'

import CardsCol from '../CardsCol/CardsCol.jsx'
const LeftTop = ({ cards }) => {
  // console.log(props)

  let col = []
  for (let i = 0; i < 4; i++) {
    col.push(<CardsCol key={i} />)
  }

  return <div className="leftTop">{col}</div>
}
export default LeftTop
