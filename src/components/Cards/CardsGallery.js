import React, { useState } from 'react';
import { IconContext } from 'react-icons'
import { GiPaperArrow } from 'react-icons/gi'

import GallerySingleCard from './GallerySingleCard'
import './CardsGallery.css'

function CardsGallery(props) {
  const [cardIndex, changeCardIndex] = useState(0)
  const [frontShowing, toggleFrontShowing] = useState(true)

  const changeCard = direction => {
    if (direction === -1) {
      changeCardIndex(cardIndex - 1)
    } else {
      changeCardIndex(cardIndex + 1)
    }
    toggleFrontShowing(true)
  }

  return (
    <div className='galleryStyles'>
      <button
        className='buttonStyles card-button previous-button'
        disabled={ cardIndex <= 0 ? 'disabled' : false }
        onClick={() => changeCard(-1)}>
          <IconContext.Provider value={{ className: "icons" }}>
            <GiPaperArrow className='arrow previous-arrow' />
          </IconContext.Provider>
      </button>
      <div className='single-card-wrapper'>
        <GallerySingleCard
          front={props.cards[cardIndex].front}
          back={props.cards[cardIndex].back}
          toggleFrontShowing={() => toggleFrontShowing(!frontShowing)}
          frontShowing={frontShowing}
          />
      </div>
      <button
        className='buttonStyles card-button next-button'
        disabled={ cardIndex >= (props.cards.length - 1) ? 'disabled' : false}
        onClick={() => changeCard(1)}>
          <IconContext.Provider value={{ className: "icons" }}>
            <GiPaperArrow className='arrow next-arrow' />
          </IconContext.Provider>
      </button>
    </div>
  )
}

export default CardsGallery
