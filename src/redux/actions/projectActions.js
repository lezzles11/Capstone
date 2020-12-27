import {
  ADD_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT,
} from "./types";

export const addProject = (project) => ({
  type: ADD_PROJECT,
  payload: project,
});

export const editProject = (project) => ({
  type: EDIT_PROJECT,
  payload: project,
});

export const deleteProject = (id) => ({
  type: DELETE_PROJECT,
  payload: id,
});
