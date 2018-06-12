import { createStore } from 'redux'

const initialState = {
  users: [],
  friends: [],
}

// initialState passed as default value
const reducer = (state = initialState, action) => {
  // log action & state on each action dispatched
  console.log(action.type, { action, state })

  switch (action.type) {
    case 'LOAD_USERS': {
      return {
        ...state,
        users: action.users
      }
    }

    case 'ADD_FRIEND': {
      // check if already present to avoid duplicates
      if (state.friends.find(friend => friend.id === action.id)) {
        // if already exists, return unchanged state
        return state
      }

      // get friend by id from users
      const newFriend = state.users.find(user => user.id === action.id)

      return {
        ...state,
        friends: [ ...state.friends, newFriend ]
      }
    }

    case 'REMOVE_FRIEND': {
      return {
        ...state,
        friends: state.friends.filter(friend => friend.id !== action.id)
      }
    }

    // /!\ any other case should return the current state !
    default: return state
  }
}

const store = createStore(
  reducer,
  // (Helper) Redux dev Tools as last argument (https://github.com/zalmoxisus/redux-devtools-extension)
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
