import React, { Component } from 'react'
import User from './components/User.js'
import './App.css'
import store from './store.js'
import { addFriend, loadUsers } from './actions.js'

class App extends Component {

  addFriend = friend => {
    store.dispatch(addFriend(friend))
  }

  componentDidMount() {
    // clem version
    // this.state = store.getState()
    // store.subscribe(() => this.setState(store.getState()))
    this.unsubscribe = store.subscribe(() => this.forceUpdate())

    const url = 'https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/students.json'
    fetch(url)
      .then(response => response.json()) // JSON.parse
      .then(users => {
        store.dispatch(loadUsers(users))
      })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    console.log('render')

    const state = store.getState()

    const friends = state.friends.map(friend =>
      <div key={friend.id}>{friend.name}</div>
    )

    const users = state.users.map(user =>
      <User key={user.id} user={user} add={this.addFriend} className='container user' />
    )

    return (
      <div className="App">
        <div>Message:<span>{state.message}</span></div>
        <span>--FOES--</span>
        {friends}
        <span>--USERS--</span>
        {users}
      </div>
    )
  }
}

export default App
