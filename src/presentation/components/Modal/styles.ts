import styled from '@emotion/styled';

const Container = styled.div<{ $isShow: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 10000;
  background-color: rgba(20, 21, 26, 0.9);
  display: ${({ $isShow }) => ($isShow ? 'flex' : 'none')};
  padding: 0 1.25rem;
`;

export const ModalStyles = {
  Container,
};
