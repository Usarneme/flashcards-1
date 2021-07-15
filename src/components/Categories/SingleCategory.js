import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './SingleCategory.css'

function SingleCategory(props) {
  return (
    <div className='list-wrapper category-wrapper'>
      <button className='buttonStyles category-button'>
        <Link to={`/category/${props.category}`} >{props.category[0].toUpperCase()}{props.category.substring(1)}</Link>
      </button>
    </div>
  )
}

SingleCategory.propTypes = {
  category: PropTypes.string.isRequired
}

export default SingleCategory
