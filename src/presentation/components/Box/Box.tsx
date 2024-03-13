import { BoxStyles } from './styles';

interface IBoxProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  minHeight?: string;
  marginTop?: string;
  paddingBottom?: string;
  animationToOpen?: boolean;
  className?: string;
  isHidden?: boolean;
  padding?: string;
  degree?: string;
  borderRadius?: string;
  marginLeft?: string;
  marginBottom?: string;
  $zIndex?: string;
  $hasGradient?: boolean;
  $hasNoBorder?: boolean;
  dataTestId?: string;
}

export const Box: React.FC<IBoxProps> = ({
  children,
  width,
  height,
  minHeight,
  paddingBottom,
  animationToOpen,
  className,
  isHidden,
  padding,
  degree,
  borderRadius,
  $zIndex,
  $hasGradient,
  marginTop,
  marginLeft,
  marginBottom,
  $hasNoBorder,
  dataTestId,
}) => {
  return (
    <BoxStyles.Container
      width={width}
      height={height}
      $paddingBottom={paddingBottom}
      animationToOpen={animationToOpen}
      className={className}
      isHidden={isHidden}
      $padding={padding}
      $degree={degree}
      $borderRadius={borderRadius}
      $minHeight={minHeight}
      $zIndex={$zIndex}
      $hasGradient={$hasGradient}
      $marginTop={marginTop}
      $marginLeft={marginLeft}
      $marginBottom={marginBottom}
      $hasNoBorder={$hasNoBorder}
      data-testid={dataTestId}
    >
      {children}
    </BoxStyles.Container>
  );
};
