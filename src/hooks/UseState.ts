import { stateEvent, stateIndex } from "../events";

const states: any[] = [];

export const useState = <T>(initialState: T): [T, ((newState: T) => void)] => {
  const localIndex = stateIndex.index;

  if (!states[localIndex]) {
    states[localIndex] = initialState;
  }

  const setState = (newState: T) => {
    states[localIndex] = newState;
    dispatchEvent(stateEvent);
  }

  stateIndex.index + 1;

  return [states[localIndex], setState];
}
