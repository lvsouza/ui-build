import { ISubscription } from "../interfaces";

interface TextActions {
  getText: () => string;
  setText: (text: string) => void;
}

interface TextProps {
  observables?: (ref: Text, actions: TextActions) => ISubscription[];
}

export function Text(): Text;
export function Text(text: string): Text;
export function Text(text: string[]): Text;
export function Text(props: TextProps): Text;
export function Text(props?: TextProps | string | string[]) {
  const element = document.createTextNode('');

  if (typeof props === 'string' || Array.isArray(props)) {

    if (Array.isArray(props)) {
      element.textContent = props.join();
    } else {
      element.textContent = props;
    }

    return element;
  }

  if (typeof props.observables === 'function') {
    const subscriptions = props.observables(element, {
      getText: () => element.textContent,
      setText: (text) => element.textContent = text,
    });

    element.remove = () => {
      subscriptions.forEach(sub => sub.unsubscribe());
      element.remove();
    };
  }

  return element;
}
