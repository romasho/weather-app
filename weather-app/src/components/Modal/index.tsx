import React from 'react';

import { Portal } from '@/components/Portal';

import { Button, TranslucentBackground, ModalBox } from './components.styled';

interface IModalProps {
  isOpen: boolean;
  onCancel: () => void;
  children?: JSX.Element | JSX.Element[];
}

export function Modal({ isOpen, onCancel, children }: IModalProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return (
    <>
      {isOpen && (
        <Portal>
          <TranslucentBackground onClick={handleClick}>
            <ModalBox>
              <Button onClick={onCancel}>&#215;</Button>
              {children}
            </ModalBox>
          </TranslucentBackground>
        </Portal>
      )}
    </>
  );
}
