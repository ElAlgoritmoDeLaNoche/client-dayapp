import * as api from '../api'
import {
  FETCH_ALL_NOTES,
  CREATE_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE
} from '../constants/actionTypes'

export const getNotes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchNotes();
    dispatch({ type: FETCH_ALL_NOTES, payload: data });
  } catch (error) {
    console.log(error.message)
  }
};

export const createNote = (note) => async (dispatch) => {
  try {
    const { data } = await api.createNote(note);
    dispatch({ type: CREATE_NOTE, payload: data });
  } catch (error) {
    console.log(error.message)
  }
};

export const updateNote = (id, note) => async (dispatch) => {
  try {
    const { data } = await api.updateNote(id, note);

    dispatch({ type: UPDATE_NOTE, payload: data });
  } catch (error) {
    console.log(error.message)
  }
};

export const deleteNote = (id) => async (dispatch) => {
  try {
    await api.deleteNote(id);

    dispatch({ type: DELETE_NOTE, payload: id });
  } catch (error) {
    console.log(error.message)
  }
};

export const likeNote = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeNote(id);

    dispatch({ type: UPDATE_NOTE, payload: data });
  } catch (error) {
    console.log(error.message)
  }
};
