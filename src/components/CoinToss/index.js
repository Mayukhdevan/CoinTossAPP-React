import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {result: 0, heads: 0, tails: 0}

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState(prevState =>
      tossResult
        ? {result: 1, tails: prevState.tails + 1}
        : {result: 0, heads: prevState.heads + 1},
    )
  }

  render() {
    const {result, heads, tails} = this.state
    const total = heads + tails

    // setInterval(() => {
    //   this.tossCoin()
    // }, 1000)

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="para-text">Heads (or) Tails</p>
          <img
            className="coin-image"
            src={
              result
                ? 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
            }
            alt="toss result"
          />
          <button type="button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="result-container">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
