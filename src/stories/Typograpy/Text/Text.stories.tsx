import Text, { TextProps } from './Text';
import { Story } from '@storybook/react';
import { css } from '@emotion/react';

export default {
  title: 'components/Typograpy/Text',
  component: Text,
  argTypes: {
    children: {
      defaultValue: '이것은 텍스트입니다',
      control: { type: 'text' },
    },
    size: {
      defaultValue: 'medium',
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    color: {
      defaultValue: 'black',
      options: ['main', 'black', 'gray', 'white'],
      control: { type: 'select' },
    },
    bold: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const text: Story<TextProps> = ({ size, color, bold, children }) => (
  <Text size={size} color={color} bold={bold}>
    {children}
  </Text>
);

text.storyName = 'Default';

const textWrapper = css`
  & > * + * {
    display: block;
    margin-top: 16px;
  }
`;

export const sizes = () => {
  return (
    <div css={textWrapper}>
      <Text size="small">이것은 텍스트입니다</Text>
      <Text size="medium">이것은 텍스트입니다</Text>
      <Text size="large">이것은 텍스트입니다</Text>
    </div>
  );
};

export const colors = () => {
  return (
    <div css={textWrapper}>
      <Text color="main">이것은 텍스트입니다</Text>
      <Text color="black">이것은 텍스트입니다</Text>
      <Text color="gray">이것은 텍스트입니다</Text>
      <Text color="white">이것은 텍스트입니다</Text>
    </div>
  );
};

export const bold = () => {
  return (
    <div css={textWrapper}>
      <Text bold={false}>이것은 텍스트입니다</Text>
      <Text bold={true}>이것은 굵은 텍스트입니다</Text>
    </div>
  );
};
