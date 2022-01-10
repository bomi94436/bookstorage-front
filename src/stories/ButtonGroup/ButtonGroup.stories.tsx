import Button from '@stories/Button/Button';
import { Story } from '@storybook/react';
import ButtonGroup, { AlignType, ButtonGroupProps } from './ButtonGroup';

export default {
  title: 'components/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    direction: {
      defaultValue: 'row',
      options: ['row', 'column'],
      control: { type: 'radio' },
    },
    rowAlign: {
      defaultValue: 'flex-start',
      options: ['flex-start', 'center', 'flex-end'] as AlignType[],
      control: { type: 'radio' },
    },
    colAlign: {
      defaultValue: 'flex-start',
      options: ['flex-start', 'center', 'flex-end'] as AlignType[],
      control: { type: 'radio' },
    },
    gap: {
      defaultValue: '0.5rem',
      control: { type: 'text' },
    },
  },
};

export const buttonGroup: Story<ButtonGroupProps> = ({ direction, rowAlign, colAlign, gap }) => {
  return (
    <ButtonGroup direction={direction} rowAlign={rowAlign} colAlign={colAlign} gap={gap}>
      <Button theme="tertiary">취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
};

buttonGroup.storyName = 'Default';

export const rightAlign = () => {
  return (
    <ButtonGroup rowAlign="flex-end">
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
