import React from 'react'
import styles from './App.module.scss'
import { connect } from 'react-redux'
import CardsColArea from './components/CardsColArea/CardsColArea.jsx'
// import RightTop from './components/RightTop/RightTop.jsx'
// import LeftTop from './components/LeftTop/LeftTop.jsx'
const App = ({ cards }) => {
  console.log(styles)
  return (
    <main className={styles.App}>
      <header></header>
      <div className={styles.topDeck}>
        <CardsColArea loc={'left'} />
        <CardsColArea loc={'right'} />
      </div>

      <CardsColArea cards={cards} />
    </main>
  )
}

const mapStateToProps = ({ rootReducerCard }) => {
  //read
  //全域放到props
  console.log(rootReducerCard)
  return {
    cards: rootReducerCard
  }
}
export default connect(
  mapStateToProps,
  null
)(App)
