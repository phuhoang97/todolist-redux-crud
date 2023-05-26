import * as types from "../constants/constants";
const init = {
  todo: [
    { id: 1, text: "khanh sinh nhat" },
    { id: 2, text: "huan sinh nhat" },
    { id: 3, text: "Linh sinh nhat" },
  ],
  checkForm: false,
};

let indexEdit;

export const todolist = (state = init, action) => {
  switch (action.type) {
    case types.ACT_ADD:
      console.log(action.payload);
      return {
        ...state,
        todo: [
          ...state.todo,
          { id: state.todo.length + 1, text: action.payload },
        ],
      };

    case types.ACT_DELETE:
      const deleteTodo = state.todo.filter(
        (todo) => todo.id !== action.payload
      );

      return { ...state, todo: deleteTodo };

    case types.ACT_EDIT:
      indexEdit = action.payload;
      return { ...state, checkForm: true };

    case types.ACT_FINISH_EDIT:
      const newTodo = [...state.todo];
      newTodo[indexEdit].text = action.payload;
      return { ...state, checkForm: false, todo: newTodo };
    default:
      return state;
  }
};
