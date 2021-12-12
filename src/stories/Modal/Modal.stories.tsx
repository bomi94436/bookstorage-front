import { Story } from '@storybook/react';
import React from 'react';
import Modal, { ModalProps } from './Modal';

export default {
  title: 'components/Modal',
  component: Modal,
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
  argTypes: {
    visible: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
    size: {
      defaultValue: 'normal',
      control: { type: 'radio' },
      options: ['normal', 'fullscreen'],
    },
    title: {
      defaultValue: '결제 성공',
      control: { type: 'text' },
    },
    description: {
      defaultValue: '결제가 성공적으로 이루어졌습니다.',
      control: { type: 'text' },
    },
    hideButtons: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    cancellable: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    cancelText: {
      defaultValue: '취소',
      control: { type: 'text' },
    },
    confirmText: {
      defaultValue: '확인',
      control: { type: 'text' },
    },
  },
};

export const modal: Story<ModalProps> = ({
  visible,
  size,
  title,
  description,
  hideButtons,
  cancellable,
  cancelText,
  confirmText,
}) => {
  return (
    <Modal
      visible={visible}
      size={size}
      title={title}
      description={description}
      hideButtons={hideButtons}
      confirmText={confirmText}
      cancelText={cancelText}
      cancellable={cancellable}
    />
  );
};

modal.storyName = 'Default';

export const cancellable = () => (
  <Modal
    visible={true}
    title="포스트 삭제"
    description="포스트를 정말로 삭제하시겠습니까?"
    confirmText="삭제"
    cancellable
  />
);

export const customContext = () => (
  <Modal visible={true} hideButtons>
    Custom Content
  </Modal>
);
