import { ISubscription } from './ISubscription';

/**
 * Interface that defines an observable value
 *
 * @param T Observable value type
 */
export interface IObservable<T> {
  id: string
  /**
   * Return the current value.
   */
  get: () => T
  /**
   * When making an assignment on this property, all
   * subscribers to that amount will hear
   */
  set: (val: T) => void;
  /**
   * Execute on ini and on every change of the value
   * @param callback Function performed when there is a change in the observable value or on start
   */
  on(callback: (val: T) => void): ISubscription;
  /**
   * Execute once on 
   * @param callback Function performed when there is a change in the observable value
   */
  onInit(callback: (val: T) => void): void;
  /**
   * Execute on every change of the value
   * @param callback Function performed when there is a change in the observable value
   */
  onChange(callback: (val: T) => void): ISubscription;
  /**
   * Enables enrollment in value changes
   * @param callback Function performed when there is a change in the observable value
   */
  subscribe(callback: (val: T) => void): ISubscription;
}
