import { createReducer } from "../../app/common/util/reducerUtils";
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT, FETCH_EVENTS } from "./eventConstants";

 const initialState = []

 const createEvent = (state, payload) => {
  return [...state, payload.event];
};

const updateEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.event.id),
    payload.event //(event => event.id !== payload.event.id) this mean we return all event that is not the one that is being selected to be updated
  ];
};

const deleteEvent = (state, payload) => {
  return [...state.filter(event => event.id !== payload.eventId)];
};

const fetchEvents = (state, payload) => {
  return payload.events
}

export default createReducer(initialState, {
  [CREATE_EVENT]: createEvent,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent,
  [FETCH_EVENTS]: fetchEvents
});
