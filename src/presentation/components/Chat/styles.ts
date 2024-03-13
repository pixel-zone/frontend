import styled from '@emotion/styled';

const Container = styled.div<{ $isClose: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ $isClose }) => ($isClose ? '0' : '18rem')};
  min-width: ${({ $isClose }) => ($isClose ? '0' : '15rem')};
  visibility: ${({ $isClose }) => ($isClose ? 'hidden' : 'visible')};
  height: calc(100vh - 5rem);
  background-color: ${({ theme }) => theme.colors.primary['02']};
  padding: ${({ $isClose }) => ($isClose ? '0' : '1.25rem 0.625rem')};
  transition: width 0.5s;

  @media (max-width: 965px) {
    position: ${({ $isClose }) => ($isClose ? 'flex' : 'absolute')};
    z-index: 10;
    right: 0;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    cursor: pointer;
    width: 1.25rem;
    height: 1.25rem;
    fill: ${({ theme }) => theme.colors.neutral['01']};
    opacity: 0.6;
  }
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.colors.neutral['01']};
  opacity: 0.6;
  display: flex;
  align-items: center;
  gap: 0 0.5rem;
  margin-left: 1rem;
`;

const NotAvailable = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.neutral['01']};
  opacity: 0.6;
  text-align: center;
  margin-top: 5rem;
`;

const Messages = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 0.625rem;
  list-style: none;

  li {
    background-color: ${({ theme }) => theme.colors.primary['01']};
    padding: 1rem;
    color: ${({ theme }) => theme.colors.neutral['01']};
  }
`;

const Type = styled.div`
  width: 100%;

  input {
    width: 100%;
    height: 60px;
    padding: 0.5rem;
    border: 0;
  }
`;

export const ChatStyles = {
  Container,
  Title,
  Header,
  NotAvailable,
  Messages,
  Type,
};
