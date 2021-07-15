import { useState } from 'react'
import { useFirestore } from 'react-redux-firebase'
import './EditDeckForm.css'

function EditDeckForm(props) {
  const [name, setName] = useState(props.name)
  const [category, setCategory] = useState(props.category)
  const firestore = useFirestore()

  const editDeck = event => {
    event.preventDefault()
    firestore.collection('decks').doc(props.deckId).update({
      name: name,
      category: category
    })
    setName('')
    setCategory('')
  }

  return (
    <div>
      <h3>Edit Deck</h3>
      <form onSubmit={e => editDeck(e)} style={{ display: 'flex', flexDirection: 'column' }} >
        <div className='formContainer' >
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
        <div style={{ display: 'flex', justifyContent: 'space-around'}} >
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
        <button className='buttonStyles' type='submit'>Save Deck Changes</button>
      </form>
    </div>
  )
}

export default EditDeckForm
