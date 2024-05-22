import { styled as styledMui } from '@mui/system';
import styled from '@emotion/styled';

const Title = styledMui('h1')`
  color: #fdfe02;
  text-align: center;
`;

const SkinsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.primary['03']};
  gap: 1rem;
`;

const Skin = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 0.5rem;
  background-color: #292909;
  border-radius: 0.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    > span {
      color: ${({ theme }) => theme.colors.neutral['01']};
      font-size: 1rem;
      text-align: center;
      padding: 0.5rem;
      font-weight: 400;
    }

    > p {
      color: ${({ theme }) => theme.colors.primary['03']};
      font-size: 0.875rem;
      font-weight: 700;
    }
  }
`;

export const SkinsStoreStyles = {
  Title,
  SkinsContainer,
  Skin,
};
