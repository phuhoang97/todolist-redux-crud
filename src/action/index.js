import * as types from "../constants/constants";

export const ACC_ADD = (user) => {
  console.log(user);
  return {
    type: types.ACT_ADD,
    payload: user,
  };
};

export const ACC_EDIT = (payload) => ({ type: types.ACT_EDIT, payload });

export const ACC_FINISH_EDIT = (payload) => ({
  type: types.ACT_FINISH_EDIT,
  payload,
});
export const ACC_DELETE = (id) => ({
  type: types.ACT_DELETE,
  payload: id,
});

