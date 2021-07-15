import { useState } from 'react'
import { useFirestore } from 'react-redux-firebase'
import './AddDeckForm.css'

function AddDeckForm() {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const firestore = useFirestore()

  const createNewDeck = event => {
    event.preventDefault()
    firestore.collection('decks').add({
      name: name,
      category: category,
      cards: []
    })
    setName('')
    setCategory('')
  }

  return (
    <div>
      <h3>Create A New Deck</h3>
      <form onSubmit={e => createNewDeck(e)} style={{ display: 'flex', flexDirection: 'column' }} >
        <div className='form' >
          <label htmlFor='name'>Name</label>
          <input
            className='input'
            type='text'
            required='required'
            name='name'
            placeholder='Deck Name'
            value={name}
            onChange={e => setName(e.target.value)} />
        </div>
        <div className='form' >
          <label htmlFor='category'>Category</label>
          <input
            className='input'
            type='text'
            required='required'
            name='category'
            placeholder='Deck Category'
            value={category}
            onChange={e => setCategory(e.target.value)} />
        </div>
        <button className='buttonStyles' type='submit'>Create New Deck</button>
      </form>
    </div>
  )
}

export default AddDeckForm
