import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Button, Col, Row, SearchInput } from 'react-onsenui';
import { Stacked } from './Stacked';
import { TabPage } from './TabPage';

const Start = ({ navigator }) => {
  const [input, setInput] = useState();

  return (
    <TabPage label="Start">
      <Col css="height: 100%">
        <Row css="margin-bottom: 0.5em">
          <SearchInput
            css="width: 100%"
            value={input}
            placeholder="example"
            onChange={event => {
              setInput(event.target.value);
            }}
          />
        </Row>
        <Row>
          <p>Input: {input || '...'}</p>
        </Row>
        <Button
          onClick={() =>
            navigator.pushPage({ component: Stacked, props: { key: 'Stacked', title: 'Test' } })
          }
        >
          Try me!{' '}
        </Button>
      </Col>
    </TabPage>
  );
};

export { Start };
