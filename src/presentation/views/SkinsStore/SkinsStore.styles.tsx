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
  padding: 1rem 1rem;
  background-color: #292909;
  min-width: 14rem;
  border-radius: 0.5rem;
  @media (max-width: 765px) {
    width: 100%;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    > span {
      color: ${({ theme }) => theme.colors.neutral['01']};
      font-size: 0.875rem;
      text-align: center;
      padding: 0.5rem;
      font-weight: 400;
    }

    > p {
      color: ${({ theme }) => theme.colors.primary['03']};
      font-size: 0.75rem;
      font-weight: 700;
    }
  }
`;

export const SkinsStoreStyles = {
  Title,
  SkinsContainer,
  Skin,
};
