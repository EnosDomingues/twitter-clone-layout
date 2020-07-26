import React, { ReactNode } from 'react';

import {
  Container,
  Item,
  Title,
  } from './styles';

interface Props {
  title: string;
  elements: ReactNode[];
}

const List: React.FC<Props> = ({ title, elements }) => {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>

      {elements.map((element, index) => (
        <Item key={index}>{element}</Item>
      ))}
    </Container>
  );
}

export default List;