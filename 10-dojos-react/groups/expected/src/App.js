import React, { Component } from 'react'
import './App.css'
import User from './components/User'
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

  addFriend = id => {
    store.dispatch({ type: 'ADD_FRIEND', id: id })
  }

  removeFriend = id => {
    store.dispatch({ type: 'REMOVE_FRIEND', id: id })
  }

  componentDidMount() {
    // fetch our data from API
    fetch('https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/students.json')
      .then(res => res.json())
      .then(fetchedUsers => store.dispatch({ type: 'LOAD_USERS', users: fetchedUsers }))

    // OR from mocks
    // store.dispatch({ type: 'LOAD_USERS', users: mockedUsers })
  }

  render() {
    console.log('render')

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
