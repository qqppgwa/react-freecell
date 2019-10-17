import React from 'react'
import styles from './App.module.scss'
import { connect } from 'react-redux'
import CardsColArea from './components/CardsColArea/CardsColArea.jsx'

const App = props => {
  console.log(props)
  return (
    <div className={styles.App}>
      <CardsColArea cards={props.cards} />
    </div>
  )
}

const mapStateToProps = ({ rootReducerCard }) => {
  //read
  //全域放到props
  // console.log(rootReducerCard)
  return {
    cards: rootReducerCard
  }
}
export default connect(
  mapStateToProps,
  null
)(App)
