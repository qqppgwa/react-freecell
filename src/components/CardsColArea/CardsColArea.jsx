import React from 'react'
import styles from './CardsColArea.module.scss'
import CardsCol from '../CardsCol/CardsCol.jsx'
const CardsColArea = props => {
  console.log(props)

  let col = []
  if (props.cards) {
    for (let i = 0; i < props.cards.length; i++) {
      col.push(<CardsCol card={props.cards[i]} key={i} />)
    }
  } else {
    for (let i = 0; i < 4; i++) {
      col.push(<CardsCol key={i} />)
    }
  }
  let topClass = props.loc === 'left' ? styles.leftTop : styles.rightTop
  return <div className={styles.colArea + (props.loc ? ' ' + topClass : '')}>{col}</div>
}
export default CardsColArea
