import React, { Component } from 'react';
import Coin from "./Coin";
import { choice } from './helpers';
import './CoinFlip.css'

class CoinFlip extends Component {
  static defaultProps = {
    coins: [
      { face: "heads", imgSrc: "Sacagawea_head.png"},
      { face: "tails", imgSrc: "Sacagawea_tail.png"}
    ],
    flips: 0,
    head: 0,
    tails: 0 
  }
  constructor(props){
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    }
    this.handleClick = this.handleClick.bind(this);
  }
  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState ( st => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.face === "heads" ? 1 : 0),
        nTails: st.nTails + (newCoin.face === "tails" ? 1 : 0)
      }
    })
  }
  handleClick(e) {
    this.flipCoin()
  }
  render() {
    return (
      <div>
        <h2>Let's Flip a Coin</h2>
        {this.state.currCoin && <Coin data={this.state.currCoin} />}
        <button onClick={this.handleClick}>Flip</button>
        <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails.</p>

      </div>
    )
  }
}

export default CoinFlip;