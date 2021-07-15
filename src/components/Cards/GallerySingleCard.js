import { useState } from 'react'
import './GallerySingleCard.css'

function SingleCard(props) {
  const [frontShowing, toggleFrontShowing] = useState(true)

  return(
    <div className='gallery-single-card' onClick={() => toggleFrontShowing(!frontShowing)}>
      {frontShowing ? props.card.front : props.card.back }
    </div>
  )
}
export default SingleCard
