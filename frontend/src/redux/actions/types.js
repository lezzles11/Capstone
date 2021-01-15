/**********************************************
 * This file will hold all the types
 * ==================================
 ***********************************************/
/**********************************************
 * Actions
 * ==================================
 * - Add a user
 * - Edit user password
 * - Delete user
 * - Get user
 ***********************************************/
export const ADD_USER = "ADD_USER";
export const EDIT_USER = "EDIT_USER";
export const DELETE_USER = "DELETE_USER";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const USER_DETAIL = "USER_DETAIL";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

// #TODO: this action will send an email to friends every time you have a complete feature
export const FINISHED_FEATURE = "FINISHED_FEATURE";
export const ADD_FEATURE = "ADD_FEATURE";
export const EDIT_FEATURE = "EDIT_FEATURE";
export const DELETE_FEATURE = "DELETE_FEATURE";

// #TODO: Implement the add task to the feature in the actions
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";

export const GET_COMPLETED_PROJECTS =
  "GET_COMPLETED_PROJECTS";
export const GET_CURRENT_PROJECTS = "GET_CURRENT_PROJECTS";
export const GET_PROJECT = "GET_PROJECT";
export const ADD_PROJECT = "ADD_PROJECT";
export const EDIT_PROJECT = "EDIT_PROJECT";
export const DELETE_PROJECT = "DELETE_PROJECT";
