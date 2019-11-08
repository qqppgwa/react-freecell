import React from 'react'
import Card from '../Card/Card.jsx'
import styles from './CardsCol.module.scss'
import { connect } from 'react-redux'
import { moveCard } from '../../store/actions/rootActions'
const CardsCol = props => {
  // const [draging, setDraging] = useState({ col: '', place: '' })
  // useEffect(() => {
  //   setDraging(draging => draging)
  //   return () => {
  //     setDraging(draging => ({ col: '', place: '' }))
  //   }
  // }, [])
  // console.log(props)
  let c = []
  let loc
  // console.log(props)
  // let getC = (c, p) => {
  //   // console.log(c)
  //   // col = c
  //   // place = p
  //   // console.log(c + p)
  //   setDraging(s => {
  //     console.log('1')
  //     return { col: c, place: p }
  //   })
  //   console.log(draging)
  //   // props.moveCard(c, p)
  //   // console.log(col + ' ' + place) //以前的位子
  // }
  if (props.loc === 'bottom') {
    // console.log(props.cards)
    for (let i = 0; i < props.card.length; i++) {
      let drag = i === props.card.length - 1 ? true : false
      c.push(<Card card={props.card[i]} key={i} index={i} drag={drag} colNo={props.colNo} loc={props.loc} />)
    }
  } else {
    // console.log(props)
    loc = props.loc === 'right' || 'left' ? styles.top : null

    // if (props.loc === 'left') {
    //   c.push(<Card card={props.card} key={0} index={0} drag={true} colNo={props.colNo} loc={props.loc} />)
    // } else {
    for (let i = 0; i < props.card.length; i++) {
      let drag = i === props.card.length - 1 ? true : false
      c.push(<Card card={props.card[i]} key={i} index={i} drag={drag} colNo={props.colNo} loc={props.loc} />)
    }
    // }
    // console.log(c)
    // console.log(loc === styles.top)
  }
  const cardColr = type => {
    console.log(type)
    if (type === 'spade' || type === 'club') {
      return 'black'
    } else {
      return 'red'
    }
  }
  const drop2 = e => {
    e.persist()
    let newCard = props.cards
    // console.log(JSON.parse(e.dataTransfer.getData('object')))
    // setDraging(5)
    let oldLoc = JSON.parse(e.dataTransfer.getData('object'))
    // console.log(oldLoc)
    let newLoc = {
      colNo: props.colNo,
      loc: props.loc
    }
    let oldLocation = newCard[oldLoc.loc][oldLoc.colNo] //draging
    let newLocation = newCard[newLoc.loc][newLoc.colNo] // draging on...
    if (newLocation.length) {
      console.log(oldLocation[oldLocation.length - 1].id)
      console.log(newLocation[newLocation.length - 1].id)
    }

    // left each cols only 1 card
    // right cols have to range by order and type
    // down cols have range by order but each card's color is different with next one
    if ((props.cards[props.loc][props.colNo].length === 0 && props.loc === 'left') || (props.loc === 'bottom' && cardColr(oldLocation[oldLocation.length - 1].type) !== cardColr(newLocation[newLocation.length - 1].type) && oldLocation[oldLocation.length - 1].id % 13 === (newLocation[newLocation.length - 1].id % 13 === 0 ? 13 : newLocation[newLocation.length - 1].id % 13) - 1) || (props.loc === 'right' && (newLocation.length > 0 ? oldLocation[oldLocation.length - 1].type === newLocation[newLocation.length - 1].type && oldLocation[oldLocation.length - 1].id === newLocation[newLocation.length - 1].id + 1 : oldLocation[oldLocation.length - 1].id % 13 === 1))) {
      // console.log(props.loc)
      // console.log(cardColr(oldLocation[oldLocation.length - 1].type))
      // console.log(cardColr(newLocation[newLocation.length - 1].type))
      // if (props.loc === 'bottom' && cardColr(oldLocation) !== cardColr(newLocation)) {
      // console.log(draging)

      // console.log(oldLocation[oldLocation.length - 1])
      // console.log(newLocation[newLocation.length > 0 ? newLocation.length - 1 : 0])
      cardColr(11)
      // let indexNew = newCard[newLoc.loc][newLoc.colNo]
      // console.log(newCard)=
      // if (newLoc.loc === 'left') {
      //   newCard[newLoc.loc][newLoc.colNo] = indexOld[indexOld.length - 1]
      // } else {
      newCard[newLoc.loc][newLoc.colNo].push(oldLocation[oldLocation.length - 1])
      // }

      oldLocation.pop()

      console.log(newCard)
      props.moveCard(newCard)
      //放下位置
      //放下的牌
      // c.push(<Card card={props.index} key={props.index} index={props.index} drag={true} />)
      // }
    }
    // let newCard = props.cards
    // // console.log(JSON.parse(e.dataTransfer.getData('object')))
    // // setDraging(5)
    // let oldLoc = JSON.parse(e.dataTransfer.getData('object'))
    // // console.log(oldLoc)
    // let newLoc = {
    //   colNo: props.colNo,
    //   loc: props.loc
    // }

    // // console.log(draging)

    // let indexOld = newCard[oldLoc.loc][oldLoc.colNo]
    // console.log(newCard[newLoc.loc][newLoc.colNo])
    // // let indexNew = newCard[newLoc.loc][newLoc.colNo]
    // // console.log(newCard)
    // // if (newLoc.loc === 'left') {
    // //   newCard[newLoc.loc][newLoc.colNo] = indexOld[indexOld.length - 1]
    // // } else {
    // newCard[newLoc.loc][newLoc.colNo].push(indexOld[indexOld.length - 1])
    // // }

    // indexOld.pop()

    // console.log(newCard[newLoc.loc][newLoc.colNo])

    // console.log(newCard)
    // props.moveCard(newCard)
    //放下位置
    //放下的牌
    // c.push(<Card card={props.index} key={props.index} index={props.index} drag={true} />)
  }
  const dragOver = e => {
    e.persist()
    e.preventDefault()

    // const target = e
    // console.log(target)
  }
  return (
    <div className={styles.deck + (loc ? ' ' + loc : '')} onDragOver={dragOver} onDrop={drop2}>
      {c}
    </div>
  )
}

const mapStateToProps = ({ rootReducerCard }) => ({
  //read
  //全域放到props
  // console.log(rootReducerCard)

  cards: rootReducerCard
})
const mapDispatchToProps = dispatch => {
  // console.log('hi')
  return {
    moveCard: card => {
      console.log()
      dispatch(moveCard(card))
    }
  }
}
export default connect(
  mapStateToProps,
  // null,
  mapDispatchToProps
)(CardsCol)
// export default CardsCol
