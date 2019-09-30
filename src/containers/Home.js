import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import NewFriendForm from '../modals/NewFriendForm'
import NewImportantDate from '../modals/NewImportantDate'
import NewNoteForm from '../modals/NewNoteForm'
import NewInteractionForm from '../modals/NewInteractionForm'

const Home = (props) => {
    return(
      <div>
        <h3>Hi, {props.currentUser.username}! Welcome to bestFriend. </h3>

        <Link to='/newfriend'>add a new friend</Link>
        <br/>
        <Link to='/friends'>see all your friends :)</Link>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Home)
