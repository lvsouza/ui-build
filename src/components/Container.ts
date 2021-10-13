import { ISubscription } from "../interfaces";

interface ContainerActions {
  getChildren: () => HTMLCollection;
  staticSet: (callback: () => void) => void;
  setChildren: (children: HTMLElement[]) => void;
}

type ContainerProps = (ref: HTMLDivElement, actions: ContainerActions) => (ISubscription | void)[]

export function Container(): HTMLDivElement;
export function Container(props?: ContainerProps): HTMLDivElement;
export function Container(props?: ContainerProps) {
  const subscriptions: ISubscription[] = [];

  const element = document.createElement('div');

  element.remove = () => {
    subscriptions.forEach(sub => sub.unsubscribe());
    element.remove();
  };


  if (typeof props === 'function') {

    const setChildren = (newChildren: HTMLElement[]) => {
      const currentChildrenToRemove = Array.from(element.children).slice(newChildren.length - 1);
      currentChildrenToRemove.forEach((_, index) => element.children.item(currentChildrenToRemove.length - (index + 1)).remove());

      newChildren.forEach((newChild, index) => {
        if (element.children.length >= (index + 1)) {
          Object.assign(element.children.item(index), newChild);
        } else {
          element.append(newChild);
        }
      });
    }

    props(element, {
      setChildren,
      getChildren: () => element.children,
      staticSet: (callback) => callback(),
    })
      .forEach((setterOrSubscription) => {
        if (typeof setterOrSubscription !== 'object') return;
        subscriptions.push(setterOrSubscription);
      });
  }

  return element;
}
