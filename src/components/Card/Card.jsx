import React from 'react'
import styles from './Card.module.scss'

// import { connect } from 'react-redux'

const Card = props => {
  // console.log(card)
  let src = require(`../../assets/cards/${props.card.type}_${(props.card.id % 13) + 1}.png`)
  return <div className={styles.card} style={{ backgroundImage: `url(${src})`, top: 40 * props.index + 'px' }}></div>
}
// const mapStateToProps = state => {
//   //read
//   //全域放到props
//   console.log(state)
//   return {
//     ...state
//   }
// }
// const mapStateToProps = ({ rootReducerCard }) => {
//read
//全域放到props
//   console.log(rootReducerCard)
//   return {
//     rootReducerCard
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
// removeCard: (card, cardColumnIndex, isDropCard) =>
//   dispatch({
//     type: actionTypes.REMOVE_CARD,
//     card,
//     cardColumnIndex,
//     isDropCard
//   }),
// clickRemoveCard: (card, cardColumnIndex) =>
//   dispatch({
//     type: actionTypes.CLICK_REMOVE_CARD,
//     card,
//     cardColumnIndex
//   })
// }
// }
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Card)
export default Card
