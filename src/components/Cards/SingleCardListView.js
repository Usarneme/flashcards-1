import { useState } from 'react'
import PropTypes from 'prop-types'

import EditCardForm from './EditCardForm'

function SingleCardListView(props) {
  const [editorShowing, setEditorShowing] = useState(false)

  const divStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  return (
    <div style={{ background: 'rgba(255,255,255,0.25)', margin: '10px', padding: '12px' }}>
      { editorShowing
        ?
        <div style={divStyles}>
          <EditCardForm {...props} hideForm={() => setEditorShowing(false)} />
          <button onClick={() => setEditorShowing(false)} className='buttonStyles'>Cancel Edits</button>
        </div>
        :
        <div style={divStyles}>
          <h4>{props.front}</h4>
          <h4>{props.back}</h4>
          <button onClick={() => setEditorShowing(true)} className='buttonStyles'>Edit Card</button>
        </div>
      }
    </div>
  )
}

SingleCardListView.propTypes = {
  deckId: PropTypes.string.isRequired,
  front: PropTypes.string.isRequired,
  back: PropTypes.string.isRequired
}

export default SingleCardListView
