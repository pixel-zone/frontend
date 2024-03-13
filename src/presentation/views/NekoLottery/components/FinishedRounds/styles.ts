import styled from '@emotion/styled';

import background from '@/presentation/assets/neko-lottery/background.png';

const Container = styled.section`
  width: 100%;
  height: 44rem;
  background-color: ${({ theme }) => theme.colors.primary['04']};
  background-image: url(${background.src});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  h4 {
    margin-bottom: 200px;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.neutral['01']};
    position: relative;
    z-index: 15;
  }

  p {
    color: ${({ theme }) => theme.colors.neutral['01']};
    font-size: 1.2rem;
    text-decoration: underline;

    span {
      color: ${({ theme }) => theme.colors.primary['03']};
      font-size: 1.6rem;
      font-weight: 600;
    }
  }

  div {
    position: relative;

    div {
      display: flex;
      flex-direction: column;
      align-items: cneter;
      justify-content: center;

      p {
        position: relative;
        z-index: 6;
        text-align: center;
      }

      &:nth-child(1) {
        position: absolute;
        top: -5rem;
        margin-left: 12.5rem;

        @media (max-width: 500px) {
          top: -3.5rem;
          margin-left: 9rem;
        }
      }

      &:nth-child(2) {
        position: absolute;
        top: -1rem;

        @media (max-width: 500px) {
          margin-left: 0;
          top: -0.5rem;
        }
      }

      &:nth-child(3) {
        position: absolute;
        top: 0.5rem;
        margin-left: 25rem;

        @media (max-width: 500px) {
          margin-left: 18rem;
          top: 1rem;
        }
      }
    }
  }

  #podium {
    max-width: 35rem;
    height: 25rem;
    object-fit: contain;

    @media (max-width: 500px) {
      width: 100%;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(3, 242, 254, 0) 45%,
      rgba(3, 1, 20, 1) 80%
    );
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 44rem;
  margin: 3.75rem 0;
  position: relative;
`;

const Confitti = styled.canvas`
  overflow: hidden;
  width: 100%;
  height: 20rem;
  margin: 0;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 5;
`;

export const FinishedRoundsStyles = {
  Container,
  Wrapper,
  Confitti,
};
