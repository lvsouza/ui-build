import { MutableRefObject } from "../types";

export function useRef<T>(value: T): MutableRefObject<T>;
export function useRef<T>(value: T | null): MutableRefObject<T>;
export function useRef<T>(value: T): MutableRefObject<T> {
  return { value }
}