import styled from 'styled-components';
import { space, color, layout, flexbox, SpaceProps, ColorProps, LayoutProps, FlexboxProps } from 'styled-system';

type BoxProps = SpaceProps | ColorProps | LayoutProps | FlexboxProps;

export const Box = styled.div<BoxProps>`
    box-sizing: border-box;
    min-width: 0;
    ${space}
    ${color}
    ${layout}
    ${flexbox}
`;
