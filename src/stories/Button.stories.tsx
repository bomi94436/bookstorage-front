import React from 'react';
import Button from './Button';

export default {
  title: 'components/Button',
  component: Button,
};

export const button = () => <Button>BUTTON</Button>;

button.story = {
  name: 'Default',
};

export const primaryButton = () => <Button>PRIMARY</Button>;
