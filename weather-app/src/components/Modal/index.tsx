import React from 'react';

import Portal from '@/components/Portal';

import { Button, TranslucentBackground, ModalBox } from './components.styled';

interface IModalProps {
  isOpened: boolean;
  onCancel: () => void;
  children?: JSX.Element | JSX.Element[];
}

export default function Modal({ isOpened, onCancel, children }: IModalProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return (
    <>
      {isOpened && (
        <Portal>
          <TranslucentBackground onClick={handleClick}>
            <ModalBox>
              <Button style={{ borderRadius: '1rem' }} onClick={onCancel}>
                &#215;
              </Button>
              {children}
            </ModalBox>
          </TranslucentBackground>
        </Portal>
      )}
    </>
  );
}
