import React, { Component } from 'react'
import './App.css'
import User from './components/User.js'
import fetchedUsers from './users.json'

class App extends Component {

  state = {
    users: [],
    friends: []
  }

  constructor() {
    super()

    console.log('constructor')
  }

  componentDidMount() {
    console.log('mount')

    // fetch -> users
    this.setState({ users: fetchedUsers })
  }

  addFriend = user => {
    const friends = this.state.friends

    friends.push(user)

    this.setState({ friends: friends })
  }

  render() {
    console.log('render', {state: this.state})

    const friends = this.state.friends.map(friend =>
      <div key={friend.id}>{friend.name}</div>
    )

    const users = this.state.users.map(user =>
      <User key={user.id} user={user} add={this.addFriend} />
    )

    return (
      <div className="App">
        <span>--FRIENDS--</span>
        {friends}
        <span>--USERS--</span>
        {users}
      </div>
    )
  }
}

export default App
