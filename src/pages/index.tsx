import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled, { css } from 'styled-components';
import Layout from '../components/layout';
import theme, { flexCenter } from '../styles/theme';
import Main from '../components/homepage/Main';

export default function Home() {
  return (
    <Layout isBlue>
      <HomePage>
        <Main />
      </HomePage>
    </Layout>
  );
}

const HomePage = styled.div`
  ${flexCenter}
`;
