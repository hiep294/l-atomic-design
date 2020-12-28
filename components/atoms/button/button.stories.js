import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './button';

const buttonClicked = e => {
  e.preventDefault();
  alert('Hello');
};

export const basicButton = () => (
  <Button onClick={action('clicked')}>Just a Button</Button>
);

export const functionButton = () => (
  <Button onClick={buttonClicked}>Function Button</Button>
);

export const linkedButton = () => <Button href="/route">Linked Button</Button>;

// export const emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       :), :)), liked, 100
//     </span>
//   </Button>
// );

export default {
  component: Button,
  title: 'Button',
};
