import { css } from '@emotion/react';
import { Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';
import { action } from '@storybook/addon-actions';
import ButtonGroup from '@stories/ButtonGroup/ButtonGroup';
import Icon from '@stories/icon/Icon';
import { theme } from '@styles/theme';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'BUTTON',
      control: { type: 'text' },
    },
    size: {
      defaultValue: 'medium',
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    theme: {
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    width: {
      defaultValue: '',
      control: { type: 'text' },
    },
  },
};

export const button: Story<ButtonProps> = ({ children, size, theme, disabled, width }) => (
  <Button size={size} theme={theme} disabled={disabled} width={width} onClick={action('onClick')}>
    {children}
  </Button>
);

button.storyName = 'Default';

const buttonWrapper = css`
  .description {
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export const primaryButton = () => <Button label="PRIMARY" />;

export const secondaryButton = () => {
  return <Button theme="secondary" label="SECONDARY" />;
};

export const tertiaryButton = () => {
  return <Button theme="tertiary" label="TERTIARY" />;
};

const customStyle = css`
  background: ${theme.color.white};
  color: ${theme.color.gray};
  svg {
    fill: ${theme.color.black};
  }
  &:hover:enabled {
    filter: brightness(100%);
    background-color: ${theme.color.lightGray};
  }
  &:active:enabled {
    filter: brightness(95%);
  }
`;

export const customButton = () => {
  return <Button customStyle={[customStyle]} label="CUSTOM" />;
};

export const sizes = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <div className="description">Small</div>
        <Button size="small" label="BUTTON" />
      </div>
      <div>
        <div className="description">Medium</div>
        <Button size="medium" label="BUTTON" />
      </div>
      <div>
        <div className="description">Large</div>
        <Button size="large" label="BUTTON" />
      </div>
    </div>
  );
};

export const disabled = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button disabled label="PRIMARY" />
      </div>
      <div>
        <Button disabled theme="secondary" label="SECONDARY" />
      </div>
      <div>
        <Button disabled theme="tertiary" label="TERTIARY" />
      </div>
      <div>
        <Button disabled label="LIKE">
          <Icon icon="heart" />
        </Button>
      </div>
      <div>
        <Button disabled theme="secondary" label="LIKE">
          <Icon icon="heart" />
        </Button>
      </div>
      <div>
        <Button disabled theme="tertiary" label="LIKE">
          <Icon icon="heart" />
        </Button>
      </div>
    </div>
  );
};

export const customSized = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button width="20rem" label="CUSTOM WIDTH" />
      </div>
      <div>
        <Button width="100%" label="FULL WIDTH" />
      </div>
    </div>
  );
};

export const withIcon = () => (
  <div>
    <ButtonGroup gap="1rem">
      <Button size="small" label="LIKE">
        <Icon icon="heart" />
      </Button>
      <Button theme="secondary" label="LIKE">
        <Icon icon="heart" />
      </Button>
      <Button theme="tertiary" size="large" label="LIKE">
        <Icon icon="heart" />
      </Button>
    </ButtonGroup>
  </div>
);

export const iconOnly = () => (
  <div>
    <ButtonGroup gap="1rem">
      <Button iconOnly size="small">
        <Icon icon="heart" />
      </Button>
      <Button iconOnly>
        <Icon icon="heart" />
      </Button>
      <Button iconOnly size="large">
        <Icon icon="heart" />
      </Button>
    </ButtonGroup>
  </div>
);
