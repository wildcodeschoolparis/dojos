import React, { Component } from 'react'
import './App.css'
import User from './components/User.js'
import mockedUsers from './users.json'
import store from './store.js'

class App extends Component {

  constructor() {
    super()

    // init state with our redux store
    this.state = store.getState()
    // & subscribe to changes -> react will re-render the view
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  componentDidMount() {
    // fetch our data from API
    fetch('https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/students.json')
      .then(res => res.json())
      .then(fetchedUsers => store.dispatch({ type: 'LOAD_USERS', users: fetchedUsers }))

    // OR from mocks
    // store.dispatch({ type: 'LOAD_USERS', users: mockedUsers })
  }

  // map
  // filter
  // reduce

  // find | findIndex
  // some | every

  addFriend = newFriend => {

    const friends = this.state.friends

    const isAlreadyFriend = friends.some(friend => newFriend.id === friend.id)

    // add new friend only if not already friend
    if (!isAlreadyFriend) {
      const action = { type: 'ADD_FRIEND', newFriend: newFriend }
      store.dispatch(action)
      store.dispatch({ type: 'CHANGE_MESSAGE', message: `${newFriend.name} is now your friend!` })
    } else {
      store.dispatch({ type: 'CHANGE_MESSAGE', message: `${newFriend.name} is already your friend!` })
    }
  }

  render() {
    console.log('render')

    const friends = this.state.friends.map(friend =>
      <div key={friend.id}>{friend.name}</div>
    )

    const users = this.state.users.map(user =>
      <User key={user.id} user={user} add={this.addFriend} />
    )

    return (
      <div className="App">
        <div>MESSAGE:<span>{this.state.message}</span></div>
        <span>--FRIENDS--</span>
        {friends}
        <span>--USERS--</span>
        {users}
      </div>
    )
  }
}

export default App
