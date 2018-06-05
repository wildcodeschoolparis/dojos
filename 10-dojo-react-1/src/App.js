import React, { Component } from 'react'
import './App.css'
import fetchedUsers from './users.json'
import User from './components/User'

class App extends Component {

  state = {
    users: [],
    friends: [],
  }

  addFriend = id => {
    // check if already present to avoid duplicates
    if (this.state.friends.find(user => user.id === id)) {
      return
    }

    // get friend by id from users
    const friend = this.state.users.find(user => user.id === id)

    // push friend to the friend list
    const friends = [ ...this.state.friends, friend ]

    this.setState({ friends: friends })
  }

  componentDidMount() {
    // We simulate users comes from a fetch call to an API

    // we would do the fetch call here in the `componentDidMount`
    // here, our fetched users comes from the users.json

    this.setState({ users: fetchedUsers })
  }

  render() {
    // log state on each render
    console.log('render', { state: this.state })

    const friends = this.state.friends.map(friend =>
      <div key={friend.id}>{friend.name}</div>
    )

    const users = this.state.users.map(user =>
      <User key={user.id} id={user.id} name={user.name} add={this.addFriend} />
    )

    return (
      <div className="App">
        <span>--FRIENDS--</span>
        <div>{friends}</div>
        <span>--USERS--</span>
        <div>{users}</div>
      </div>
    )
  }
}

export default App
