import { observe } from "ui-build";

type Optional<T> = {
  [P in keyof T]?: T[P];
}

type TEventsToRegistre = {
  [K in keyof GlobalEventHandlers]?: GlobalEventHandlers[K];
}

type TRegistreEvents = <T extends HTMLElement>(element: T, events: TEventsToRegistre) => void;

const registreEvents: TRegistreEvents = (element, events) => {
  Object.assign(element, events);
}

const Component = <K extends keyof HTMLElementTagNameMap>(tagName: K, maker: (element: HTMLElementTagNameMap[K]) => HTMLElement) => {
  const element = document.createElement(tagName);
  return () => maker(element);
}


export const Dashboard = Component('div', (element) => {

  element.textContent = 'Teste';

  const counter = observe(0);

  counter.on(counter => element.firstChild?.replaceWith(`Teste: ${counter}`));

  registreEvents(element, {
    onclick: () => counter.set(counter.get() + 1),
  });

  return element;
});
