import React, { useState } from 'react';
import styled from 'styled-components';
import MainInput from './partial/MainInput';

const MainPage = () => {
  return (
    <MainGroup>
      <MainImg />
      <MainInput />
    </MainGroup>
  );
};

const MainGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px 0;
`;

const MainImg = styled.img`
  width: 200px;
  height: 200px;
`;

export default MainPage;
