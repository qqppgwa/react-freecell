import React from 'react'
import styles from './Card.module.scss'

// import { connect } from 'react-redux'

const Card = props => {
  return <div className={styles.card}></div>
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
