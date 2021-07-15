import PropTypes from 'prop-types'
import SingleCategory from './SingleCategory'
import './CategoriesList.css'

function CategoriesList(props) {
  return (
    <div className='categories-list-wrapper'>
      { props.categories.map((category, index) => <SingleCategory key={`${category}${index}`} category={category}/>)}
    </div>
  )
}

CategoriesList.propTypes = {
  categories: PropTypes.array.isRequired
}

export default CategoriesList
