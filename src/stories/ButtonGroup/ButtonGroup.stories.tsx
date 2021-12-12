import Button from '@stories/Button/Button';
import { Story } from '@storybook/react';
import ButtonGroup, { ButtonGroupProps } from './ButtonGroup';

export default {
  title: 'components/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    direction: {
      defaultValue: 'row',
      options: ['row', 'column'],
      control: { type: 'radio' },
    },
    rightAlign: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    gap: {
      defaultValue: '0.5rem',
      control: { type: 'text' },
    },
  },
};

export const buttonGroup: Story<ButtonGroupProps> = ({
  direction,
  rightAlign,
  gap,
}) => {
  return (
    <ButtonGroup direction={direction} rightAlign={rightAlign} gap={gap}>
      <Button theme="tertiary">취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
};

buttonGroup.storyName = 'Default';

export const rightAlign = () => {
  return (
    <ButtonGroup rightAlign>
      <Button theme="tertiary">취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
};

export const column = () => {
  return (
    <ButtonGroup direction="column">
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
    </ButtonGroup>
  );
};

export const customGap = () => {
  return (
    <ButtonGroup gap="1rem">
      <Button theme="tertiary">취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
};

export const customGapColumn = () => {
  return (
    <ButtonGroup direction="column" gap="1rem">
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
    </ButtonGroup>
  );
};
