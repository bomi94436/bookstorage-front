import { css } from '@emotion/react'
import { Story } from '@storybook/react'
import Button, { ButtonProps } from './Button'
import { action } from '@storybook/addon-actions'
import ButtonGroup from '@stories/ButtonGroup/ButtonGroup'
import { RiBookFill } from 'react-icons/ri'
import { AiFillHome } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    label: {
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
}

export const button: Story<ButtonProps> = ({ label, size, theme, disabled, width }) => (
  <Button
    label={label}
    size={size}
    theme={theme}
    disabled={disabled}
    width={width}
    onClick={action('onClick')}
  />
)

button.storyName = 'Default'

const buttonWrapper = css`
  .description {
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`

export const primaryButton = () => <Button label="PRIMARY" />

export const secondaryButton = () => {
  return <Button theme="secondary" label="SECONDARY" />
}

export const tertiaryButton = () => {
  return <Button theme="tertiary" label="TERTIARY" />
}

export const quaternaryButton = () => {
  return <Button theme="quaternary" label="TERTIARY" />
}

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
  )
}

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
        <Button disabled theme="quaternary" label="TERTIARY" />
      </div>
      <div>
        <Button disabled label="LIKE">
          <RiBookFill />
        </Button>
      </div>
      <div>
        <Button disabled theme="secondary" label="LIKE">
          <AiFillHome />
        </Button>
      </div>
      <div>
        <Button disabled theme="tertiary" label="LIKE">
          <FaUserCircle />
        </Button>
      </div>
      <div>
        <Button disabled theme="quaternary" label="LIKE">
          <FaUserCircle />
        </Button>
      </div>
    </div>
  )
}

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
  )
}

export const withIcon = () => (
  <div>
    <ButtonGroup gap="1rem">
      <Button size="small" label="LIKE">
        <RiBookFill />
      </Button>
      <Button theme="secondary" label="LIKE">
        <AiFillHome />
      </Button>
      <Button theme="tertiary" size="large" label="LIKE">
        <FaUserCircle />
      </Button>
      <Button theme="quaternary" size="small" label="LIKE">
        <FaUserCircle />
      </Button>
    </ButtonGroup>
  </div>
)

export const iconOnly = () => (
  <div>
    <ButtonGroup gap="1rem">
      <Button iconOnly size="small">
        <RiBookFill />
      </Button>
      <Button iconOnly>
        <AiFillHome />
      </Button>
      <Button iconOnly size="large">
        <FaUserCircle />
      </Button>
    </ButtonGroup>
  </div>
)
