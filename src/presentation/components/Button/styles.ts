import styled from '@emotion/styled';
import { orbitron } from '@/configs/styles/global';

const Default = styled.button`
  font-family: ${orbitron};
  width: 9.375rem;
  height: 2.5rem;
  border-radius: 1.25rem;
  background-color: ${({ theme }) => theme.colors.primary['03']};
  cursor: pointer;
  border: none;
  color: ${({ theme }) => theme.colors.primary['02']};
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 700;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0px 0 30px -10px ${({ theme }) => theme.colors.primary['03']};
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

const Outlined = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${orbitron};
  gap: 0 0.5rem;
  position: relative;
  text-transform: uppercase;
  width: 9.375rem;
  height: 2.5rem;
  border-radius: 1.25rem;
  background: ${({ theme }) => theme.colors.primary['04']};
  cursor: pointer;
  border: none;
  color: ${({ theme }) => theme.colors.neutral['01']};
  font-size: 0.875rem;
  font-weight: 700;
  z-index: 1;
  transition: all 0.5s ease-in-out;
  border: 1px solid #676711;

  &:hover {
    background: ${({ theme }) => theme.colors.primary['03']};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ButtonStyles = {
  Default,
  Outlined,
};
