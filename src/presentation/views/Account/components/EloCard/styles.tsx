import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 15em;
  padding: 1rem 0.75rem;
  background: ${({ theme }) => theme.colors.primary['01']};
  z-index: 1;
  border: 1px solid ${({ theme }) => theme.colors.primary['03']};
`;

const DownloadCard = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0 0.5rem;
  color: ${({ theme }) => theme.colors.neutral['01']};
  font-size: 1rem;
  position: relative;
  height: 0.001rem;

  > img {
    position: absolute;
    top: 10px;
    right: 15px;
    z-index: 3;
    cursor: pointer;
  }
`;

const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.neutral['01']};
  font-size: 1rem;
  height: 100%;
  font-weight: 700;
  gap: 0 1rem;
  margin-top: 1rem;
  margin-bottom: 0.55rem;

  > span {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.neutral['01']};
    max-height: 8rem;

    > h1 {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.neutral['01']};
      margin-top: -27px;
    }

    > p {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.25rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary['03']};
    }

    > small {
      display: flex;
      font-size: 1rem;
      justify-content: flex-start;
      align-items: center;
      width: 8rem;
      gap: 0.5rem;

      > img {
        object-fit: scale-down;
        margin-left: -0.5rem;
      }
    }
  }
`;

const Distribution = styled.div`
  display: flex;
  gap: 0 1.875rem;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.primary['03']};
  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0 0 0;

    > span {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.75rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.neutral['01']};
    }

    > p {
      font-size: 1rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary['03']};
    }
  }
`;

export const ContainerIcons = styled.div`
  position: relative;
  z-index: 2;
  > div {
    > img {
      position: absolute;
      cursor: pointer;
    }

    &:hover {
      > small {
        display: block;
      }
    }
    > small {
      display: none;
    }
  }
`;

export const EloCardStyles = {
  Container,
  ContainerIcons,
  DownloadCard,
  Summary,
  Distribution,
};
