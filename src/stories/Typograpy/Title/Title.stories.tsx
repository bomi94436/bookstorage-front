import { css } from '@emotion/react';
import { Story } from '@storybook/react';
import Title, { TitleProps } from './Title';

export default {
  title: 'components/Typograpy/Title',
  component: Title,
  argTypes: {
    children: {
      defaultValue: 'This is Title',
      control: { type: 'text' },
    },
    level: {
      defaultValue: '1',
      options: ['1', '2', '3', '4', '5'],
      control: { type: 'select' },
    },
  },
};

export const title: Story<TitleProps> = ({ level, children }) => (
  <Title level={level}>{children}</Title>
);

title.storyName = 'Default';

const titleWrapper = css`
  display: flex;
  flex-direction: column;
`;

export const levels = () => {
  return (
    <div css={titleWrapper}>
      <Title>This is h1 Title</Title>
      <Title level="2">This is h2 Title</Title>
      <Title level="3">This is h3 Title</Title>
      <Title level="4">This is h4 Title</Title>
      <Title level="5">This is h5 Title</Title>
    </div>
  );
};
