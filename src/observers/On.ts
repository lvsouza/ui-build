import { IObservable } from "../interfaces"


type TOnHandle<T> = (val: T) => void;

type TTriggerOn = 'init' | 'change'

export function on<T>(observable: IObservable<T>, handle: TOnHandle<T>);
export function on<T>(observable: IObservable<T>, triggerOn: TTriggerOn[], handle: TOnHandle<T>);
export function on<T>(observable: IObservable<T>, triggerOn: TTriggerOn[] | TOnHandle<T>, handle?: TOnHandle<T>) {
  if (Array.isArray(triggerOn)) {

    if (triggerOn.includes('init')) {
      handle(observable.get());
    }

    if (triggerOn.includes('change')) {
      return observable.subscribe(handle);
    }

    return observable.subscribe(() => undefined);
  } else {
    return observable.subscribe(triggerOn);
  }
}
