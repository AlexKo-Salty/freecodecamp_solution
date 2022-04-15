// Define ADD, addMessage(), messageReducer(), and store here:

//Action Types
const ADD = 'ADD';

//Action - Add Message
const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
}

//Reducer - Handle the actions
const messageReducer = (state = [],action) => {
  switch (action.type) {
    case ADD:
      return [...state,action.message];
    default:
      return state;
  }
}

//Store - store the state
const store = Redux.createStore(messageReducer);