import PropTypes from 'prop-types'
import './GallerySingleCard.css'

function SingleCard(props) {
  return(
    <div className='gallery-single-card' onClick={props.toggleFrontShowing}>
      {props.frontShowing ? props.front : props.back }
    </div>
  )
}

SingleCard.propTypes = {
  toggleFrontShowing: PropTypes.func.isRequired,
  frontShowing: PropTypes.bool.isRequired,
  front: PropTypes.string.isRequired,
  back: PropTypes.string.isRequired
}

export default SingleCard
