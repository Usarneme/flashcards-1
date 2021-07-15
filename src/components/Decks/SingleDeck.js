import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import CardsGallery from '../Cards/CardsGallery'
import { useParams } from 'react-router-dom'
import './SingleDeck.css'

function SingleDeck(props) {
  const { id } = useParams()

  if (props.deckPage) {
    return (
      <div className='single-deck-wrapper'>
        <h3 className='nameStyles'>{props.name}</h3>
        <p className='faded'>{props.category}</p>
        { id ?
          props.cards.length ? <CardsGallery cards={props.cards} /> : 'No cards yet'
          : null
        }
      </div>
    )
  } else {
    return (
      <Link className='buttonStyles deckStyles'to={`/deck/${props.id}`}>
        <h3 className='nameStyles'>{props.name}</h3>
        <p className='faded'>{props.category}</p>
        { id ?
          props.cards.length ? <CardsGallery cards={props.cards} /> : 'No cards yet'
          : null
        }
      </Link>
    )
  }
}

SingleDeck.propTypes = {
  deckPage: PropTypes.bool
}

export default SingleDeck
