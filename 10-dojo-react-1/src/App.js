import React, { Component } from 'react'
import './App.css'
import fetchedUsers from './users.json'
import User from './components/User'

class App extends Component {

  state = {
    users: [],
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

    const users = this.state.users.map(user =>
      <User key={user.id} name={user.name} />
    )

    return (
      <div className="App">
        <div>{users}</div>
      </div>
    )
  }
}

export default App
