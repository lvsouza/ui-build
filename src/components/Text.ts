import { MutableRefObject } from "../types";

interface TextProps {
  text?: string | string[];
  ref?: MutableRefObject<Text>;
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

  if (props?.text) {
    if (Array.isArray(props.text)) {
      element.textContent = props.text.join();
    } else {
      element.textContent = props.text;
    }
  } else {
    element.textContent = '';
  }

  // Load the element reference
  if (props?.ref) {
    props.ref.value = element;
  }

  return element;
}
