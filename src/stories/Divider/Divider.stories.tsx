import { css } from '@emotion/react';
import { Story } from '@storybook/react';
import Divider, { DividerProps } from './Divider';

export default {
  title: 'components/Divider',
  component: Divider,
  argTypes: {
    direction: {
      defaultValue: 'row',
      options: ['row', 'column'],
      control: { type: 'radio' },
    },
  },
};

const dividerRowWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50vw;
  height: 50vh;
`;

const dividerColumnWrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50vw;
  height: 50vh;
`;

export const divider: Story<DividerProps> = ({ direction }) => {
  return (
    <div css={direction === 'row' ? dividerRowWrapper : dividerColumnWrapper}>
      <Divider direction={direction} />
    </div>
  );
};

divider.storyName = 'Default';

export const columnDivider = () => {
  return (
    <div css={dividerColumnWrapper}>
      <Divider direction="column" />
    </div>
  );
};
