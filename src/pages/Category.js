import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import { Link } from 'react-router-dom'
import Header from './../components/Layout/Header'

function Category() {
  useFirestoreConnect([
    { collection: 'decks' }
  ])
  const allDecks = useSelector(state => state.firestore.ordered.decks)
  const { category } = useParams()

  if (!isLoaded(allDecks)) {
    return <div className='container'>Loading...</div>
  }

  if(isLoaded(allDecks)) {
    const decks = allDecks.filter(deck => deck.category === category)
    console.dir(decks)

    return(
      <div className='container'>
        <Header title={`Category - ${category[0].toUpperCase()}${category.substring(1)}`} />
        <div className='list-wrapper' >
          { decks.map(deck => <Link className='buttonStyles' to={`/deck/${deck.id}`}>{deck.name}</Link> )}
        </div>
      </div>
    )
  }
}

export default Category
