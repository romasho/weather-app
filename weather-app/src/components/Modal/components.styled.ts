import styled from 'styled-components';

import { IconButton as styledButton } from '@/components/components.styled';

export const Button = styled(styledButton)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 2rem;
  line-height: 1rem;
`;

export const TranslucentBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1110;
`;

export const ModalBox = styled.div`
  position: relative;
  background-color: ghostwhite;
  border-radius: 4px;
  max-width: 600px;
  width: 100%;
  padding: 3rem;
  margin: 2rem 2rem 4rem 2rem;
  background: center/cover, rgba(35, 41, 70, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;

  backdrop-filter: blur(5px);
`;
