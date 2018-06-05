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

  removeFriend = id => {
    const friends = this.state.friends.filter(user => user.id !== id)

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

    // /!\ Advanced
    // - spread all `user` properties as User props
    // - pass a button element as a child of the User component
    const friends = this.state.friends.map(user =>
      <User key={user.id} {...user}>
        <button onClick={() => this.removeFriend(user.id)}>Remove</button>
      </User>
    )

    const users = this.state.users.map(user =>
      <User key={user.id} {...user}>
        <button onClick={() => this.addFriend(user.id)}>Add</button>
      </User>
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
