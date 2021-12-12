import { Story } from '@storybook/react';
import Icon, { IconProps, iconTypes } from './Icon';
import { iconListStyle } from './Icon.styles';

export default {
  title: 'components/Icon',
  component: Icon,
  argTypes: {
    icon: {
      defaultValue: 'heart',
      options: ['exit', 'heart', 'pencil'],
      control: { type: 'radio' },
    },
    color: {
      defaultValue: 'red',
      control: { type: 'text' },
    },
    size: {
      defaultValue: '4rem',
      control: { type: 'text' },
    },
  },
};

export const icon: Story<IconProps> = ({ icon, color, size, className }) => (
  <Icon icon={icon} color={color} size={size} className={className} />
);
icon.storyName = 'Default';

export const customSize = () => <Icon icon="heart" size="4rem" />;

export const customColor = () => <Icon icon="heart" color="red" />;

export const customizedWithStyle = () => (
  <Icon icon="heart" css={{ color: 'red', width: '4rem' }} />
);

export const listOfIcons = () => (
  <ul css={iconListStyle}>
    {iconTypes.map((icon) => (
      <li key={icon}>
        <Icon icon={icon} />
        {icon}
      </li>
    ))}
  </ul>
);
