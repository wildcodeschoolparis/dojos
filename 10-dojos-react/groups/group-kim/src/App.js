import React, { Component } from 'react'
import fetchedUsers from './users.json'
import User from './components/User.js'
import './App.css'

class App extends Component {
  state = {
    users: [],
    friends: []
  }

  addFriend = friend => {
    this.setState({ friends: [ ...this.state.friends, friend ] })
  }

  componentDidMount() {
    // fetch -> fetchedUsers

    this.setState({ users: fetchedUsers })
  }

  render() {
    console.log('render', { state: this.state })

    const friends = this.state.friends.map(friend =>
      <div key={friend.id}>{friend.name}</div>
    )

    const users = this.state.users.map(user =>
      <User key={user.id} user={user} add={this.addFriend} className='container user' />
    )

    return (
      <div className="App">
        <span>--FOES--</span>
        {friends}
        <span>--USERS--</span>
        {users}
      </div>
    )
  }
}

export default App
