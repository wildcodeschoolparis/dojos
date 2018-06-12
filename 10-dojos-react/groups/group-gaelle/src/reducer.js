const initialState = {
  users: [],
  friends: []
}

// const say = (message = 'hello world') => console.log(message)
// say('hello')
// say()

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'LOAD_USERS': {
      return {
        ...state,
        users: action.users
      }
    }

    case 'ADD_FRIEND': {
      const newFriend = action.friend

      // check if already exists
      if (state.friends.find(friend => friend.id === newFriend.id)) {
        return state
      }

      return {
        ...state,
        friends: [ ...state.friends, newFriend ]
      }
    }

    case 'REMOVE_FRIEND': {
      const removeFriendId = action.friend.id
      const newFriends = state.friends.filter(user => user.id !== removeFriendId)
      return {
        ...state,
        friends: newFriends
      }
    }

    default: return state
  }

}

export default reducer
