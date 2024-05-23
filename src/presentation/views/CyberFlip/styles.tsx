import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem 0;
  padding: 5rem 0;
  margin: 0 auto;
`;

const Title = styled.span`
  position: relative;
  font-size: 2rem;
  background: ${({ theme }) => theme.colors.primary['04']};
  color: ${({ theme }) => theme.colors.neutral['01']};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  left: 0;
  top: 0%;
  padding: 0.65rem 1rem;
  width: 100%;
  text-align: center;
  z-index: 1;

  > p {
    margin-left: 1rem;
  }

  &::before {
    content: '';
    z-index: -1;
    display: block;
    position: absolute;
    inset: 0;
    padding: 0.08rem 0;
    background: ${({ theme }) =>
      `linear-gradient(315deg, ${theme.colors.primary['01']} , ${theme.colors.primary['04']}  , ${theme.colors.primary['01']})`};
    -webkit-mask: ${({
      theme,
    }) => `linear-gradient( ${theme.colors.neutral['01']} 0 0) content-box,
      linear-gradient(${theme.colors.neutral['01']} 0 0)`};
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

export const CyberFlipStyles = {
  Container,
  Title,
};
