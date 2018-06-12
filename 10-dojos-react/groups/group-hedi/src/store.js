import { createStore } from 'redux'

const initialState = {
  users: [],
  friends: [],
  message: '',
}

// initialState passed as default value
const reducer = (state = initialState, action) => {
  console.log(action.type, { action, state })

  switch (action.type) {
    case 'LOAD_USERS': {
      return {
        ...state,
        users: action.users
      }
    }

    case 'ADD_FRIEND': {
      return {
        ...state,
        friends: [ ...state.friends, action.newFriend ]
      }
    }

    case 'CHANGE_MESSAGE': {
      return {
        ...state,
        message: action.message
      }
    }

    // /!\ any other case should return the current state !
    default: return state
  }
}

const store = createStore(
  reducer,
  // Redux dev Tools as last argument (https://github.com/zalmoxisus/redux-devtools-extension)
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
