import React from 'react';
import styled, { ThemeContext, DefaultTheme } from 'styled-components';
import {
  Theme,
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

const fontFamilies: { heading: string; body: string } = {
  heading: 'Montserrat, serif',
  body: 'Raleway, sans-serif',
};

export type BaseStyles = {
  base: StyledSystemProps;
};

export type TextProps = StyledSystemProps & {
  variant?: TextVariants;
  component?: any;
};

export type AnchorProps = StyledSystemProps &
  Pick<LinkProps, 'to'> & {
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    variant?: TextVariants;
    component?: any;
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

const getVariantStyles = (theme: DefaultTheme & Theme, variant: TextVariants): StyledSystemProps => {
  switch (variant) {
    case 'H1':
      return { fontSize: [50, 51, 52, 57], fontWeight: 700, fontFamily: fontFamilies.heading, as: 'h1' };
    case 'H2':
      return { fontSize: [37, 39, 41, 43], fontWeight: 700, fontFamily: fontFamilies.heading, as: 'h2', color: theme.colors.primary };
    case 'H3':
      return { fontSize: [27, 28, 22, 24], fontWeight: 700, fontFamily: fontFamilies.heading, as: 'h3' };
    case 'H4':
      return { fontSize: [18, 20, 22, 24], fontWeight: 700, fontFamily: fontFamilies.heading, as: 'h4', color: theme.colors.primary };
    case 'H5':
      return { fontSize: [16, 17, 19, 21], fontWeight: 700, fontFamily: fontFamilies.heading, as: 'h5' };
    case 'H6':
      return { fontSize: [16, 17, 19, 21], fontWeight: 700, fontFamily: fontFamilies.heading, as: 'h6', color: theme.colors.primary };
    case 'LargeLead':
      return { fontSize: [18, 20, 22, 24], fontWeight: 500, fontFamily: fontFamilies.body, as: 'p' };
    case 'SmallLead':
      return { fontSize: [17, 18, 19, 21], fontWeight: 500, fontFamily: fontFamilies.body, as: 'p' };
    case 'Paragraph':
      return { fontSize: [14, 15, 15, 16], fontWeight: 300, fontFamily: fontFamilies.body, as: 'p' };
    case 'SmallParagraph':
      return { fontSize: [13, 14, 14, 15], fontWeight: 300, fontFamily: fontFamilies.body, as: 'p' };
    case 'Link':
      return { fontSize: [14, 15, 15, 16], fontWeight: 700, fontFamily: fontFamilies.body, as: Link };
  }
};

const basicStyles = (theme: Theme): BaseStyles => ({
  base: {},
});

export const Text: React.FC<TextProps | AnchorProps> = ({ children, variant = 'Paragraph', component, ...other }) => {
  const themeContext = React.useContext(ThemeContext);

  const variantStyles = React.useMemo(() => getVariantStyles(themeContext, variant), [themeContext, variant]);
  const styles = React.useMemo(() => basicStyles(themeContext), [themeContext]);

  return (
    <DynamicComponent {...variantStyles} {...other}>
      {children}
    </DynamicComponent>
  );
};
