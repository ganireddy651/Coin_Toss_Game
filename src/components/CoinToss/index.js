// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {isHead: 'heads', head: 0, tails: 0}

  coinImage = () => {
    const {isHead} = this.state
    if (isHead === 'heads') {
      return (
        <img
          src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
          alt="toss result"
          className="image"
        />
      )
    }
    return (
      <img
        src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
        alt="tails"
        className="image"
      />
    )
  }

  buttonClicked = () => {
    const totalResult = Math.floor(Math.random() * 2)
    if (totalResult === 0) {
      this.setState(preState => ({
        head: preState.head + 1,
        isHead: 'heads',
      }))
    } else {
      this.setState(preState => ({
        tails: preState.tails + 1,
        isHead: 'tails',
      }))
    }
  }

  render() {
    const {isHead, head, tails} = this.state
    console.log(isHead)
    const total = head + tails
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <div className="image-container">{this.coinImage()}</div>
          <button
            type="button"
            className="customBtn"
            onClick={this.buttonClicked}
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="para">{`Total: ${total}`}</p>
            <p className="para">{`Heads: ${head}`}</p>
            <p className="para">{`Tails: ${tails}`}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
