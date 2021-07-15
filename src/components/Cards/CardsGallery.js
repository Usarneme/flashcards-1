import React, { useState } from 'react';
import { IconContext } from 'react-icons'
import { GiPaperArrow } from 'react-icons/gi'

import GallerySingleCard from './GallerySingleCard'
import './CardsGallery.css'

function CardsGallery(props) {
  const [cardIndex, changeCardIndex] = useState(0)

  return (
    <div className='galleryStyles'>
      <button
        className='buttonStyles card-button previous-button'
        disabled={ cardIndex <= 0 ? 'disabled' : false }
        onClick={() => changeCardIndex(cardIndex - 1)}>
          <IconContext.Provider value={{ className: "icons" }}>
            <GiPaperArrow className='arrow previous-arrow' />
          </IconContext.Provider>
      </button>
      <div className='single-card-wrapper'>
        <GallerySingleCard card={props.cards[cardIndex]} />
      </div>
      <button
        className='buttonStyles card-button next-button'
        disabled={ cardIndex >= (props.cards.length - 1) ? 'disabled' : false}
        onClick={() => changeCardIndex(cardIndex + 1)}>
          <IconContext.Provider value={{ className: "icons" }}>
            <GiPaperArrow className='arrow next-arrow' />
          </IconContext.Provider>
      </button>
    </div>
  )
}

export default CardsGallery
