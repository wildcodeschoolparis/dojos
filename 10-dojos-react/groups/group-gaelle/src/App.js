import React, { Component } from 'react'
import './App.css'
import store from './store.js'
import { addFriend, loadUsers, removeFriend } from './actions.js'
import User from './components/User'

class App extends Component {

  constructor(){
    super()
    this.state = store.getState()
    store.subscribe(() => this.setState(store.getState()))

    // store.subscribe(() => this.forceUpdate())
  }

  componentDidMount() {
    const url = 'https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/students.json'

    fetch(url)
      .then(res => res.json())
      .then(users => store.dispatch(loadUsers(users)))
  }

  render() {
    console.log('render')

    const friends = this.state.friends.map(friend =>
      <User key={friend.id} user={friend}>
        <button onClick={() => store.dispatch(removeFriend(friend))}>REMOVE</button>
      </User>
    )

    const users = this.state.users.map(user =>
      <User key={user.id} user={user}>
        <button onClick={() => store.dispatch(addFriend(user))}>ADD ME</button>
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
