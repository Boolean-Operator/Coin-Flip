import React from 'react';
import './Coin.css';

function Coin(props) {
  return(
    <div className="Coin">
      <img className="Coin-Image" src={props.data.imgSrc} alt={props.data.face} />
    </div>
  )
}

export default Coin;