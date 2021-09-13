import React, { useState } from 'react';
import styled from 'styled-components';

const MainInput = () => {
  const [mainInput, setMainInput] = useState('');

  const handleOnChange = (e) => {
    const { value } = e.target;
    setMainInput(value);
    console.log(mainInput);
  };

  return (
    <>
      <MainSearching
        placeholder="소환사명, 소환사명..."
        onChange={handleOnChange}
      />
    </>
  );
};

const MainSearching = styled.input`
  margin-top: 40px;
  width: 600px;
  height: 50px;
  padding: 0 20px;
`;

export default MainInput;
