import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import styled from 'styled-components';
import { Text } from '../components/Typography/Text';
import { irsiTheme } from '../themes';
import { ColorProps, color } from 'styled-system';

export default {
  title: 'Button',
  component: Button,
};

export const Test = () => (
  <Container>
    <Text variant="H2">Typography</Text>
    <Divider />
    <Text variant="H1">H1: Animi aperiam, aspernatur culpa deserunt eaque, eius explicabo inventore ipsa laudantium</Text>
    <Text variant="H2">H2: Consectetur consequuntur cum deserunt dignissimos esse fugiat inventore iusto, laboriosam maiores minima!.</Text>
    <Text variant="H3">H3: Culpa dignissimos expedita facilis, fugiat minus odio reiciendis ut? Accusamus delectus dicta eius.</Text>
    <Text variant="H4">H4: Accusamus ad adipisci alias aliquam aperiam autem, culpa dolorem enim error est eum.</Text>
    <Text variant="H5">H5: Debitis distinctio dolorum fugiat impedit itaque necessitatibus, quo sunt? Atque consectetur, corporis.</Text>
    <Text variant="H6">H6: Culpa dignissimos expedita facilis, fugiat minus odio reiciendis ut? Accusamus delectus dicta eius.</Text>
    <Text variant="LargeLead">
      LargeLead:Deleniti est facere id placeat provident sapiente totam vitae. Asperiores consequuntur eaque eum.
    </Text>
    <Text variant="SmallLead">
      SmallLead: At aut corporis culpa doloribus ea enim error est impedit, ipsum iure maxime molestiae omnis optio.
    </Text>
    <Text variant="Paragraph">
      Paragraph: Facilis hic iste perspiciatis qui quibusdam sint velit vero Animi doloremque esse ex iure perferendis.
    </Text>
    <Text variant="SmallParagraph">
      SmallParagraph: Ad animi at debitis eligendi explicabo facere illum inventore, ipsum minus obcaecati.
    </Text>
    <Text variant="Link" to="/">
      Link: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </Text>
    <Divider />
    <GridContainer>
      <div>
        <Text variant="SmallParagraph">Kind</Text>
      </div>
      <div>
        <Text variant="SmallParagraph">HEX</Text>
      </div>
      <div>
        <Text variant="SmallParagraph">Color</Text>
      </div>
    </GridContainer>
    {Object.entries(irsiTheme.colors).map(obj => (
      <GridContainer key={obj[0]}>
        <Text variant="SmallParagraph">{obj[0]}</Text>
        <Text variant="SmallParagraph">{obj[1]}</Text>
        <ColorCircle color={obj[1] as string} />
      </GridContainer>
    ))}
    <Divider />
    <Text variant="H2">Breakpoints</Text>
    <Text variant="Paragraph">These are the responsive breakpoints being used</Text>
    <br />
    <FlexContainer>
      {irsiTheme.breakpoints.map((key: string) => (
        <Text variant="SmallParagraph" key={key} m={4}>
          {key}
        </Text>
      ))}
    </FlexContainer>
    <Divider />
    <Text variant="H2">Space</Text>
    <FlexContainer>
      {Object.entries(irsiTheme.space).map(obj => (
        <div key={obj[0]}>
          <Text variant="SmallParagraph" m={2}>
            <strong>{obj[1]}px</strong>
          </Text>
          <Text variant="SmallParagraph" m={2}>
            {obj[0]}
          </Text>
        </div>
      ))}
    </FlexContainer>
  </Container>
);

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

const Divider = styled.div`
  border: 1px solid #00000022;
  width: 100%;
  margin: ${({ theme }) => theme.space.m}px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 150px 150px 150px;
  margin: ${({ theme }) => theme.space.m}px;
`;

const ColorCircle = styled.div<{ color: string }>`
  height: 20px;
  width: 20px;
  border-radius: 20px;
  background-color: ${({ color }) => color};
`;

const FlexContainer = styled.div`
  display: flex;
`;

const Container = styled.div`
  background-color: white;
  height: 100vh;
  padding: 16px;
`;
