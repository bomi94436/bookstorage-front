import { useState } from '@storybook/addons';
import { Story } from '@storybook/react';
import { ButtonGroup, Sidebar } from '..';
import { SidebarProps } from './Sidebar';
import { AddBookInBookStorageButton, HomeButton, LoginButton } from './SidebarButtons';

export default {
  title: 'components/Sidebar',
  component: Sidebar,
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
  argTypes: {
    width: {
      defaultValue: '1300',
      control: { type: 'number' },
    },
  },
};

export const SidebarStory: Story<SidebarProps> = ({ width }) => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <Sidebar open={open} setOpen={setOpen} width={width}>
      <ButtonGroup direction="column" gap="16px">
        <HomeButton open={open} />

        <AddBookInBookStorageButton open={open} />
      </ButtonGroup>

      <LoginButton open={open} />
    </Sidebar>
  );
};

SidebarStory.storyName = 'Default';
