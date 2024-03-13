import styled from '@emotion/styled';

const Container = styled.div`
  padding: 1rem;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.primary['01']};
  border-radius: 0.25rem;
  width: 100%;
  height: 40vh;
  position: relative;
`;

const Timestamps = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary['01']};
  border-radius: 0.25rem;
  width: fit-content;
  padding: 0.5rem 1rem;
  flex-wrap: wrap;
  cursor: not-allowed;
  opacity: 0.5;

  > button {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.neutral['01']};
    background: ${({ theme }) => theme.colors.primary['04']};
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    border: none;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    /*
    &:hover {
      cursor: pointer;
      background: ${({ theme }) => theme.colors.primary['03']};
      color: ${({ theme }) => theme.colors.primary['02']};
    } */
  }
`;

const DisabledChart = styled.div`
  width: 100%;
  height: 110%;
  position: absolute;
  left: 0;
  cursor: not-allowed;
  z-index: 9;
  display: flex;

  > div {
    margin: auto;
    margin-bottom: 300px;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.neutral['01']};
    font-weight: 500;
    text-align: center;
    opacity: 0.5;
  }
`;

export const ChartStyles = {
  Container,
  Timestamps,
  DisabledChart,
};
