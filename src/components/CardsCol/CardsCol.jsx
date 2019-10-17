import React from 'react'
import Card from '../Card/Card.jsx'
import styles from './CardsCol.module.scss'
const CardsCol = ({ card }) => {
  // console.log(card)
  let c = []
  if (card) {
    for (let i = 0; i < card.length; i++) {
      c.push(<Card card={card[i]} key={i} index={i} />)
    }
  }

  return <div className={styles.deck}>{c}</div>
}
export default CardsCol
