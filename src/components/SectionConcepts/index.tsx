import React from 'react';

import Container from 'components/Container';
import Heading from 'components/Heading';

import * as S from './styles';
import { SectionConceptsProps } from 'types/api';

const SectionConcepts = ({ title, concepts }: SectionConceptsProps) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{title}</Heading>
      <S.List>
        {concepts.map((concept, index) => (
          <S.Item key={index}>{concept.title}a</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
);

export default SectionConcepts;
