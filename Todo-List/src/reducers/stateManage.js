const list = [];
const manageArray = (state = list, action) => {
  switch (action.type) {
    case "Edit":
    {
        const {id,name,userName,setUpdateFlag} = action.payload;
        const newArray = state.filter((todo) => {
            return todo.id !== id;
        });
        console.log(newArray);
        const todo = state.find((todo) => todo?.id === id);
        todo.name=name;
        todo.userName=userName;
        newArray.push(todo);
        return newArray;
        setUpdateFlag(false);
        return state;
    }
    case "Submit":
      state.push(action.payload);
      console.log(state);
      return state;
    case "Delete": {
      const idx = state.findIndex((ele) => ele.id === action.payload);
      let newState;
      if (idx > -1) {
        newState = [...state.slice(0, idx), ...state.slice(idx + 1)];
        console.log(newState, idx, action.payload);
        return newState;
      }
      console.log(newState, idx, action.payload);
      return state;
    }
    default:
      return state;
  }
};

export default manageArray;