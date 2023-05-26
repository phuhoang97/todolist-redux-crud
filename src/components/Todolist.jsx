import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACC_ADD, ACC_EDIT, ACC_FINISH_EDIT } from "../action/index";
import { ACT_DELETE } from "../constants/constants";
function Todolist() {
  const todo = useSelector((state) => state.todolist);
  console.log(todo);
  const dispatch = useDispatch();
  const [user, setUser] = useState("");

  const handleSubmit = () => {
    dispatch(ACC_ADD(user));
    setUser("");
  };

  function handleEdit(index) {
    dispatch(ACC_EDIT(index));
    setUser(todo.todo[index].text);
  }

  function handleFinish() {
    dispatch(ACC_FINISH_EDIT(user));
    setUser("");
  }
  function handleDelete(id) {
    dispatch(ACT_DELETE(id));
  }
  return (
    <div>
      <input
        type='text'
        onChange={(e) => setUser(e.target.value)}
        value={user}
      />
      {todo.checkForm ? (
        <button onClick={handleFinish}>Update</button>
      ) : (
        <button onClick={handleSubmit}>add</button>
      )}

      {todo.todo.map((e, i) => (
        <p>
          {e.text}
          <i
            onClick={() => handleEdit(i)}
            className='fa-solid fa-pen-to-square'
          ></i>
          <i
            onClick={() => handleDelete(e.id)}
            class='fa-solid fa-trash-can'
          ></i>
        </p>
      ))}
    </div>
  );
}

export default Todolist;
