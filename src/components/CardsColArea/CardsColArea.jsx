import React from 'react'
import styles from './CardsColArea.module.scss'
import CardsCol from '../CardsCol/CardsCol.jsx'
const CardsColArea = props => {
  // console.log(props)

  let col = []
  if (props.loc === 'bottom') {
    for (let i = 0; i < props.cards.length; i++) {
      col.push(<CardsCol card={props.cards[i]} loc={props.loc} key={i} colNo={i} />)
    }
  } else {
    // console.log(props.cards)
    for (let i = 0; i < props.cards.length; i++) {
      // console.log(props.cards[i])
      col.push(<CardsCol card={props.cards[i]} key={i} loc={props.loc} colNo={i} />)
    }
  }
  let topClass = props.loc === 'left' ? styles.leftTop : styles.rightTop
  return <div className={styles.colArea + (props.loc !== 'bottom' ? ' ' + topClass : '')}>{col}</div>
}
export default CardsColArea
