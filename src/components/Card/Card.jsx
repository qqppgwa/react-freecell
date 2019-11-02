import React, { useState, useEffect } from 'react'
import styles from './Card.module.scss'

// import { connect } from 'react-redux'

const Card = props => {
  // console.log(props)
  const [top, setTop] = useState(0)
  useEffect(() => {
    setTop(40 * props.index + 'px')
  }, [])
  let src

  if (props.card.type) {
    src = props.card.length > 0 || props.card !== {} ? require(`../../assets/cards/${props.card.type}_${props.card.id % 13 === 0 ? 13 : props.card.id % 13}.png`) : ''
  }

  const dragStart = e => {
    e.persist()
    // console.log(props)
    e.dataTransfer.setData('object', JSON.stringify({ colNo: props.colNo, loc: props.loc ? props.loc : 'bottom' }))
    // e.preventDefault()
    // props.dragStart(props.colNo, props.loc ? props.loc : 'bottom')
    // console.log(e)
  }
  const dragEnd = e => {
    e.persist()
    // e.preventDefault()
    // console.log(e.dataTransfer)
  }
  return (
    <div onDragStart={dragStart} onDragEnd={dragEnd}>
      <img className={styles.card} style={{ top: props.loc === 'bottom' ? top : '' }} src={src ? src : ''} alt={props.card.type + (props.card.id % 13 === 0 ? 13 : props.card.id % 13)} draggable={props.drag} />
    </div>
  )
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
