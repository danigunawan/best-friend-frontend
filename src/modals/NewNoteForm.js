import React, {Fragment} from 'react';
import { connect } from 'react-redux'
import { addingNewNote } from '../redux/actions'

class NewNoteForm extends React.Component {

  constructor(){
    super()
    this.state = {
      content: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    const data = {
      userId: this.props.currentUser.id,
      content: this.state.content,
      friendId: this.props.friend.id
    }
    this.props.addingNewNote(data)
  }
  
  render(){
    return (
      <Fragment>
        <h2>add a note on your friend</h2>
        <form onSubmit={this.onSubmit}>
        <label>got a note about your friend?</label>
          <textarea className='textarea'
            type="text" 
            name="content"
            placeholder="friends?"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <button type='submit'
            className='ui button'> Submit
          </button>
        </form>
      </Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.currentUser,
    friend: state.friends.find(
      friend => friend.id === parseInt(ownProps.match.params.friendId)
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addingNewNote: (data) => { dispatch( addingNewNote(data) ) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewNoteForm)