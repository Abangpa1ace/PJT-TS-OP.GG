import React from 'react'
import styled from 'styled-components';
import { flexAlign } from '../../styles/theme';

const AppHeader: React.FC = () => {
  return (
    <Appheader>
      <div className="wrapper">
        <h2>OP.GG</h2>
      </div>
    </Appheader>
  )
}

const Appheader = styled.header`
  ${flexAlign};
  height: 48px;
  background-color: ${({ theme }) => theme.blue.theme};
  color: #fff;

  .wrapper {
    width: ${({ theme }) => theme.width.nav};
    margin: 0 auto;
  }
`;

export default AppHeader;
