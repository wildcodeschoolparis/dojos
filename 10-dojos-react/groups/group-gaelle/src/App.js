import React, { Component } from 'react'
import './App.css'
import fetchedUsers from './users.json'
import User from './components/User'

class App extends Component {

  state = {
    users: [],
    friends: []
  }

  removeFriend = friend => {
    const friends = this.state.friends.filter(user => user.id !== friend.id)

    // const oldFriendIndex = this.state.friends.findIndex(user => user.id === friend.id)
    // const friends = [
    //   ...this.state.friends.slice(0, oldFriendIndex),
    //   ...this.state.friends.slice(oldFriendIndex + 1)
    // ]

    this.setState({ friends })
  }

  addFriend = friend => {
    // check if already exists
    if (this.state.friends.find(user => user.id === friend.id)) {
      return
    }

    this.setState({ friends: [ ...this.state.friends, friend ] })
  }

  componentDidMount() {
    // fetch -> fetchedUsers

    this.setState({ users: fetchedUsers })
  }

  render() {
    console.log('render', { state: this.state })

    // const users = this.state.users.map(User)
    // const users = this.state.users.map(user => <User {...user} />)
    // const users = this.state.users.map(user => <User id={user.id} name={user.name} />)

    const friends = this.state.friends.map(friend =>
      <User key={friend.id} user={friend}>
        <button onClick={() => this.removeFriend(friend)}>REMOVE</button>
      </User>
    )

    const users = this.state.users.map(user =>
      <User key={user.id} user={user}>
        <button onClick={() => this.addFriend(user)}>ADD ME</button>
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
