import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import {
  space,
  color,
  ColorProps,
  fontFamily,
  FontSizeProps,
  FontWeightProps,
  FontFamilyProps,
  fontSize,
  fontWeight,
  textStyle,
  letterSpacing,
  fontStyle,
  size,
  borderRadius,
  lineHeight,
  textAlign,
  SpaceProps,
  FontStyleProps,
  SizeProps,
  TextStyleProps,
  LetterSpacingProps,
  BorderRadiusProps,
  LineHeightProps,
  TextAlignProps,
} from 'styled-system';
import { LinkProps, Link } from 'react-router-dom';
import { IrsiTheme } from '../../themes/types';

export type TextVariants = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'LargeLead' | 'SmallLead' | 'Paragraph' | 'SmallParagraph' | 'Link';

export type StyledSystemProps =
  | SpaceProps
  | FontSizeProps
  | FontStyleProps
  | SizeProps
  | ColorProps
  | TextStyleProps
  | LetterSpacingProps
  | FontFamilyProps
  | FontWeightProps
  | BorderRadiusProps
  | LineHeightProps
  | TextAlignProps
  | { color?: string; as?: keyof JSX.IntrinsicElements | React.ComponentType<any> };

export type BaseStyles = {
  base: StyledSystemProps;
};

export type TextProps = StyledSystemProps & {
  variant?: TextVariants;
};

export type AnchorProps = TextProps &
  Pick<LinkProps, 'to'> & {
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  };

const DynamicComponent = styled.div`
    ${space}
    ${fontSize}
    ${fontStyle}
    ${size}
    ${color}
    ${textStyle}
    ${letterSpacing}
    ${fontFamily}
    ${fontWeight}
    ${borderRadius}
    ${lineHeight}
    ${textAlign}
`;

const getVariantStyles = (theme: IrsiTheme, variant: TextVariants): StyledSystemProps => {
  switch (variant) {
    case 'H1':
      return { fontSize: [50, 51, 52, 57], fontWeight: 700, fontFamily: theme.fonts.heading, as: 'h1' };
    case 'H2':
      return { fontSize: [37, 39, 41, 43], fontWeight: 700, fontFamily: theme.fonts.heading, as: 'h2', color: theme.colors.primary };
    case 'H3':
      return { fontSize: [27, 28, 22, 24], fontWeight: 700, fontFamily: theme.fonts.heading, as: 'h3' };
    case 'H4':
      return { fontSize: [18, 20, 22, 24], fontWeight: 700, fontFamily: theme.fonts.heading, as: 'h4', color: theme.colors.primary };
    case 'H5':
      return { fontSize: [16, 17, 19, 21], fontWeight: 700, fontFamily: theme.fonts.heading, as: 'h5' };
    case 'H6':
      return { fontSize: [16, 17, 19, 21], fontWeight: 700, fontFamily: theme.fonts.heading, as: 'h6', color: theme.colors.primary };
    case 'LargeLead':
      return { fontSize: [18, 20, 22, 24], fontWeight: 500, fontFamily: theme.fonts.body, as: 'p' };
    case 'SmallLead':
      return { fontSize: [17, 18, 19, 21], fontWeight: 500, fontFamily: theme.fonts.body, as: 'p' };
    case 'Paragraph':
      return { fontSize: [14, 15, 15, 16], fontWeight: 300, fontFamily: theme.fonts.body, as: 'p' };
    case 'SmallParagraph':
      return { fontSize: [13, 14, 14, 15], fontWeight: 300, fontFamily: theme.fonts.body, as: 'p' };
    case 'Link':
      return { fontSize: [14, 15, 15, 16], fontWeight: 700, fontFamily: theme.fonts.body, as: Link };
  }
};

const basicStyles = (theme: IrsiTheme): BaseStyles => ({
  base: {},
});

export const Text: React.FC<TextProps | AnchorProps> = ({ children, variant = 'Paragraph', ...other }) => {
  const Component = DynamicComponent;
  const themeContext = React.useContext<IrsiTheme>(ThemeContext);

  const variantStyles = React.useMemo(() => getVariantStyles(themeContext, variant), [themeContext, variant]);
  const styles = React.useMemo(() => basicStyles(themeContext), [themeContext]);

  Component.displayName = variant;
  return (
    <Component {...variantStyles} {...other}>
      {children}
    </Component>
  );
};
