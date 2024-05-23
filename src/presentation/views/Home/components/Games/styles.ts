import styled from '@emotion/styled';

import bgGames from '@/presentation/assets/bg-games.png';

const Container = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 600px) {
    .container-game {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      flex-direction: column;
    }
  }
`;

const Card = styled.div<{ $blocked: boolean }>`
  width: 100%;
  min-width: 300px;
  height: 25rem;
  border-radius: 0.5rem;
  padding: 1.25rem 0 1.25rem 1.25rem;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
  background-color: #2b2b0b;
  border: 1px solid #676711;
  opacity: ${({ $blocked }) => ($blocked ? '0.5' : '1')};
  transition: all 0.2s;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.border['hoverBox']};
  }

  img {
    width: 31.25rem;
    height: auto;
    position: absolute;
    right: 0;
    bottom: 0;
    object-fit: contain;
    z-index: 0;
  }

  p {
    color: ${({ theme }) => theme.colors.neutral['01']};
    font-size: 1.5rem;
    font-weight: 600;
    z-index: 2;
  }

  button {
    position: relative;
    z-index: 3;
    cursor: ${({ $blocked }) => ($blocked ? 'not-allowed' : 'pointer')};
  }

  @media (max-width: 600px) {
    justify-content: flex-start;
  }
`;

export const GamesStyles = {
  Container,
  Card,
};
