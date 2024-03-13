import styled from '@emotion/styled';

const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 5rem;
  background: #111105;
  padding: 0 1rem;
`;

const Logo = styled.p``;

const Warning = styled.div`
  width: 100%;
  height: 1.8rem;
  background-color: ${({ theme }) => theme.colors.primary['03']};
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  p {
    text-align: center;
    color: ${({ theme }) => theme.colors.primary['02']};
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const Account = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.5rem 1rem;
  height: 2.5rem;
  background-color: #292909;
  color: ${({ theme }) => theme.colors.neutral['01']};
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  cursor: pointer;
  border: 1px solid #676711;

  > div {
    display: none;
    z-index: 3;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border['hoverBox']};
    border-left: 1px solid ${({ theme }) => theme.colors.border['hoverBox']};
    border-right: 1px solid ${({ theme }) => theme.colors.border['hoverBox']};
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  > p {
    @media (max-width: 680px) {
      display: none;
    }
  }

  > img {
    margin-right: -0.25rem;
  }
  svg {
    width: 1.25rem;
  }

  &:hover {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;

    > div {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem 1rem;
      background-color: ${({ theme }) => theme.colors.primary['01']};
      width: 12.6rem;
      left: -1px;
      top: 38px;

      cursor: default;
    }

    > span {
      > img {
        transform: rotate(180deg);
      }
    }
  }
`;

const Balance = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: no-wrap;

  p {
    font-weight: 600;
    margin-right: 0.5rem;
  }
`;

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  background-color: rgb(32 36 49 / 80%);

  svg {
    circle {
      stroke: ${({ theme }) => theme.colors.primary['03']};
    }
  }
`;

export const HeaderStyles = {
  Container,
  Logo,
  Warning,
  Account,
  Balance,
  Loading,
};
