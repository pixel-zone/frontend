import styled from '@emotion/styled';

export interface ITooltipProps {
  children?: React.ReactNode;
  $left?: string;
  $right?: string;
  $top?: string;
  $bottom?: string;
  $width?: string;
}

export const TooltipContainer = styled.small<ITooltipProps>`
  display: none;
  position: absolute;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  z-index: 2;
  ${({ $left }) => ($left ? `left: ${$left};` : '')}
  ${({ $right }) => ($right ? `right: ${$right};` : '')}
    ${({ $top }) => ($top ? `top: ${$top};` : '')}
    ${({ $bottom }) => ($bottom ? `bottom: ${$bottom};` : '')}
    ${({ $width }) => ($width ? `width: ${$width};` : '')}
    font-size: 0.675rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral['01']};
  background: ${({ theme }) => theme.colors.primary['04']};
`;
