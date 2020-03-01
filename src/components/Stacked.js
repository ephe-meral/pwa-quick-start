import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { BackButton, Button, Col, Row, SearchInput } from 'react-onsenui';
import { TabPage } from './TabPage';

const Stacked = ({ navigator, title }) => {
  const [input, setInput] = useState();

  return (
    <TabPage label={title} leftButton={<BackButton>Back</BackButton>}>
      <p>Stacked!</p>
    </TabPage>
  );
};

export { Stacked };

