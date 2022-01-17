import { Story } from '@storybook/react';
import { useState } from 'react';
import { Input } from '..';
import { InputProps } from './Input';

export default {
  title: 'components/Input',
  component: Input,
  argTypes: {
    placeholder: {
      defaultValue: 'hi',
      control: { type: 'text' },
    },
    width: {
      defaultValue: 'default',
      control: { type: 'text' },
    },
  },
};

export const InputStory: Story<InputProps> = ({ placeholder, width }) => (
  <Input placeholder={placeholder} width={width} />
);

export const NumberInput = () => {
  const [value, setValue] = useState<number>(0);

  return <Input width="default" value={value} onChange={(e) => setValue(Number(e.target.value))} />;
};

export const SearchInput = () => <Input width="default" use="search" placeholder="search..." />;

InputStory.storyName = 'Default';
