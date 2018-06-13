const initialState = {
  users: [],
  friends: [],
  message: ''
}

// const tab = [1, 2, 3, 4, 5]
// const firstEvenNumber = tab.find(n => n % 2 === 0)
// const firstEvenNumberIndex = tab.findIndex(n => n % 2 === 0)
// const evenNumbers = tab.filter(n => n % 2 === 0)
// const atLeastOneIsEvenNumber = tab.some(n => n % 2 === 0) // true | false
// const areAllEvenNumbers = tab.every(n => n % 2 === 0) // true | false

const reducer = (state = initialState, action) => {

  if (action.type === 'ADD_FRIEND') {
    const newFriend = action.friend
    // handle if already exists
    const isAlreadyFriend = state.friends.some(friend => friend.id === newFriend.id)

    if (isAlreadyFriend) {
      return {
        ...state,
        message: `${newFriend.name} is already your friend`
      }
    }

    return {
      ...state,
      friends: [ ...state.friends, newFriend ],
      message: `${newFriend.name} is now your friend!`
    }
  }

  if (action.type === 'LOAD_USERS') {
    return {
      ...state,
      users: action.users
    }
  }

  return state
}

export default reducer
