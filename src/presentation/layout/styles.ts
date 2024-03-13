import styled from '@emotion/styled';

const Content = styled.div`
  width: 100%;
  height: calc(100dvh - 5rem);
  overflow: hidden;
  display: flex;
  background: #0c0c04;
`;

const ChildrenContent = styled.div`
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

const ChatButton = styled.div`
  position: absolute;
  z-index: 99;
  bottom: 1.875rem;
  right: 1.875rem;
  width: 3.125rem;
  height: 3.125rem;
  background-color: red;
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary['03']};
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 6px 0 rgba(0, 0, 0, 0.19);

  svg {
    width: 25px;
    height: 25px;
    color: ${({ theme }) => theme.colors.primary['02']};
  }
`;

export const LayoutStyles = {
  Content,
  ChildrenContent,
  ChatButton,
};
