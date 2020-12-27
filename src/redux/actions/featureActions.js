import {
  ADD_FEATURE,
  EDIT_FEATURE,
  DELETE_FEATURE,
} from "./types";

export const addFeature = (feature) => ({
  type: ADD_FEATURE,
  payload: feature,
});

export const editFeature = (feature) => ({
  type: EDIT_FEATURE,
  payload: feature,
});

export const deleteFeature = (id) => ({
  type: DELETE_FEATURE,
  payload: id,
});

