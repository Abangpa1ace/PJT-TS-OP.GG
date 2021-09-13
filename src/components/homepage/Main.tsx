import React from 'react';
import styled from 'styled-components';
import MainLogo from '../../assets/mainImg.png';

const Main = () => {
  return (
    <MainGroup>
      <MainImg />
      <MainInput placeholder="소환사명, 소환사명..." />
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

const MainInput = styled.input`
  margin-top: 40px;
  width: 500px;
  height: 50px;
  padding: 0 20px;
`;

export default Main;
