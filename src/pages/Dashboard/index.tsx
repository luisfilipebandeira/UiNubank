import React from 'react';

import Card from '../../components/Card';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';

import { Container } from './styles';

const pages: React.FC = () => {
  return (
    <Container>
      <Header />
      <Card />
      <Tabs />
    </Container>
  );
}

export default pages;