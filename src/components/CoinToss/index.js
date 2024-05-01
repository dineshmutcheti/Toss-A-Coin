import './index.css'

import {Component} from 'react'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: HEADS_IMG_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state

    const toss = Math.floor(Math.random() * 2)

    let tossImg = ''
    let latestHeeadCount = headsCount
    let latestTailsCount = tailsCount

    if (toss === 0) {
      tossImg = HEADS_IMG_URL
      latestHeeadCount += 1
    } else {
      tossImg = TAILS_IMG_URL
      latestTailsCount += 1
    }
    this.setState({
      tossResultImage: tossImg,
      headsCount: latestHeeadCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="app-container">
        <div className="coin-toss-con">
          <h1 className="heading"> Coin Toss Game</h1>
          <p className="desc">Heads (or) Tails </p>
          <img
            src={tossResultImage}
            alt="toss result"
            className="toss-result-img"
          />
          <button className="button" type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>

          <div className="counts-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
