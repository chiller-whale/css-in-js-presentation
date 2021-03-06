import React from 'react';
import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import { Split } from 'mdx-deck';

const scope = { styled, css, Global };

const CodeContainer = styled.div`
  font-size: 20px;
`;

export default function(props) {
  return (
    <LiveProvider code={props.code} scope={scope} noInline={true}>
      <Split style={{ width: '100%' }}>
        <CodeContainer>
          <LiveEditor />
          <LiveError />
        </CodeContainer>
        <LivePreview />
      </Split>
    </LiveProvider>
  );
}
