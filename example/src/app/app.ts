import { Button, Container, FC, observe, on, Text, Title } from 'ui-build';
import 'supreme-ui/dist/supreme-ui.css';

export const App: FC = () => {
  return Todo();
};

const Todo = () => {
  const todos = observe<string[]>([]);

  console.log(todos)

  setInterval(() => {
    todos.set([...todos.get(), Date.now().toString()]);
  }, 1000);

  return Container((_, { setChildren }) => [
    on(todos, ['init', 'change'], (todos) => setChildren(todos.map(todo => {
      return (
        Title({
          variant: 'h2',
          children: Text(todo)
        })
      )
    }))),
  ]);
}

/* const Counter: FC = () => {
  const counter = observe(0);


  const incrementButton = Button({
    children: Text('Somar'),
    classList: ['padding-s', 'flex1'],
    onClick: () => counter.set(counter.get() + 1),
  });

  const decrementButton = Button({
    children: Text('Subtrair'),
    classList: ['padding-s', 'flex1'],
    onClick: () => counter.set(counter.get() - 1),
  })


  return Container({
    classList: ['full-width', 'flex-column', 'padding-s'],
    children: [
      Container({
        classList: ['full-width'],
        children: [decrementButton, incrementButton]
      }),
      Container({
        children: [
          Title({
            variant: 'h2',
            observables: (_, { setText }) => [
              on(counter, ['init', 'change'], counter => setText('Contador: ' + counter.toString())),
            ],
          }),
          Text({
            observables: (_, { setText }) => [
              on(counter, ['init', 'change'], counter => setText('Contador: ' + counter.toString())),
            ],
          }),
        ]
      }),
    ],
  });
}; */
