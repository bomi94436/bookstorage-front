import Button from '@stories/Button/Button';
import ButtonGroup from '@stories/ButtonGroup/ButtonGroup';
import React, { Fragment } from 'react';
import { darkLayer, fullscreen, sizes, whiteBox, whiteBoxWrapper } from './Modal.styles';
import { theme } from '@styles/theme';

export type ModalProps = {
  visible: boolean;
  size: 'normal' | 'fullscreen';
  title?: string;
  description?: string;
  children?: React.ReactNode;
  hideButtons?: boolean;
  cancellable?: boolean;
  disableConfirm?: boolean;
  cancelText: string;
  confirmText: string;
  onCancel?: () => void;
  onConfirm?: () => void;
};

const Modal = ({
  visible,
  size,
  title,
  description,
  children,
  hideButtons,
  cancellable,
  disableConfirm,
  cancelText,
  confirmText,
  onCancel,
  onConfirm,
}: ModalProps) => {
  if (!visible) return null;

  return (
    <Fragment>
      <div css={[fullscreen, darkLayer]}></div>
      <div css={[fullscreen, whiteBoxWrapper]}>
        <div css={[whiteBox, sizes[size]]}>
          <div>
            {title && <h3 className="modal-title">{title}</h3>}
            {description && <p className="modal-description">{description}</p>}
          </div>

          <div className="modal-contents">{children}</div>

          {!hideButtons && (
            <ButtonGroup css={{ marginTop: '48px' }} rightAlign gap="16px">
              {cancellable && (
                <Button theme="tertiary" onClick={onCancel} width={theme.defaultSize.button}>
                  {cancelText}
                </Button>
              )}
              <Button
                onClick={onConfirm}
                width={theme.defaultSize.button}
                disabled={disableConfirm ? disableConfirm : false}
              >
                {confirmText}
              </Button>
            </ButtonGroup>
          )}
        </div>
      </div>
    </Fragment>
  );
};

Modal.defaultProps = {
  size: 'normal',
  cancelText: '취소',
  confirmText: '확인',
};

export default Modal;
