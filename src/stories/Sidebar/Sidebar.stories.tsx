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
};

export const SidebarStory: Story<SidebarProps> = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <ButtonGroup direction="column" gap="16px">
        <HomeButton open={open} />

        <AddBookInBookStorageButton open={open} onClick={() => ({})} />
      </ButtonGroup>

      <LoginButton open={open} />
    </Sidebar>
  );
};

SidebarStory.storyName = 'Default';
