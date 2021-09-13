import { flexCenter } from '@/styles/theme';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import MainPage from '../components/main/MainPage';


export default function Home() {
  return (
    <Layout isBlue>
      <HomePage>
        <MainPage />
      </HomePage>
    </Layout>
  );
}

const HomePage = styled.div`
  ${flexCenter}
`;
