import { stateEvent } from "../events";

const states: any[] = [];
let stateIndex = 0;

export function useState<T>(initialState: T): [T, ((newState: T) => void)] {
  stateIndex++;

  if (!states[stateIndex]) {
    states[stateIndex] = initialState;
  }

  const setState = (newState: T) => {
    states[stateIndex] = newState;

    dispatchEvent(stateEvent);
  }

  return [states[stateIndex], setState];
}
