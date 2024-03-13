import React from 'react';
import { TooltipContainer } from './styles';
import { ITooltipProps } from './styles';

export const Tooltip: React.FC<ITooltipProps> = props => {
  const { children, $left, $right, $top, $bottom, $width } = props;

  return (
    <TooltipContainer
      $left={$left}
      $right={$right}
      $top={$top}
      $bottom={$bottom}
      $width={$width}
    >
      {children}
    </TooltipContainer>
  );
};
