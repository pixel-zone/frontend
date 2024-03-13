import styled from '@emotion/styled';

const Container = styled.div<{
  width?: string;
  height?: string;
  $marginTop?: string;
  $paddingBottom?: string;
  animationToOpen?: boolean;
  isHidden?: boolean;
  $padding?: string;
  $degree?: string;
  $borderRadius?: string;
  $minHeight?: string;
  $zIndex?: string;
  $marginLeft?: string;
  $marginBottom?: string;
  $hasGradient?: boolean;
  $hasNoBorder?: boolean;
}>`
  position: relative;
  z-index: ${({ $zIndex }) => $zIndex || '1'};
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width || '100%'};
  min-width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'min-content'};
  min-height: ${({ $minHeight }) => $minHeight || ''};
  border-radius: ${({ $borderRadius }) => $borderRadius || '0.5rem'};
  padding: ${({ $padding }) => $padding || '1rem'};
  padding-bottom: ${({ $paddingBottom }) => $paddingBottom};
  overflow: ${props => (props.isHidden ? 'hidden' : '')};
  margin-top: ${({ $marginTop }) => ($marginTop ? $marginTop : '')};
  margin-left: ${({ $marginLeft }) => ($marginLeft ? $marginLeft : '')};
  margin-bottom: ${({ $marginBottom }) => ($marginBottom ? $marginBottom : '')};
  background: ${({ theme }) => theme.colors.primary['04']};
  background: ${({ theme }) => theme.colors.primary['04']};
  flex-wrap: wrap;

  border: 1px solid #676711;

  /* &:hover {
    border: 1px solid ${({ theme }) => theme.colors.border['hoverBox']};
  } */
  ${props =>
    props.animationToOpen &&
    `@keyframes animationToOpen {
    from {
      width: 0;
      height: 0;
    }
    to {
      width: ${props.width || '100%'};
      height: ${props.height || 'min-content'};
    }
  }

  animation: animationToOpen 0.3s;

  `}
  transition: all 0.2s;
`;

export const BoxStyles = {
  Container,
};
