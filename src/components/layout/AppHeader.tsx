import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { ROUTES } from '../../constants';
import styled from 'styled-components';
import { flexAlign } from '../../styles/theme';
import { route } from 'next/dist/server/router';

const AppHeader: React.FC = () => {
  const router = useRouter();
  return (
    <Appheader>
      <div className="wrapper">
        <div className="title"><h2>OP.GG</h2></div>
        <nav className="nav">
          {ROUTES.map((r) => {
            return (
              <NavItem className={r.path === router.pathname ? 'active' : ''}>
                <Link href={r.path}>{r.text}</Link>
              </NavItem>
            )
          })}
        </nav>
      </div>
    </Appheader>
  )
}

const Appheader = styled.header`
  background-color: ${({ theme }) => theme.blue.theme};
  color: #fff;

  .wrapper {
    width: ${({ theme }) => theme.width.nav};
    margin: 0 auto;

    .title {
      ${flexAlign};
      height: 48px;
      font-size: 18px;
    }

    .nav {
      ${flexAlign};
      height: 48px;
    }
  }
`;

const NavItem = styled.div`
  height: 100%;
  margin-right: 20px;
  line-height: 48px;
  opacity: 0.5;

  a {
    font-size: 15px;
  }

  &:hover, &.active {
    opacity: 1;
  }
  &.active {
    border-bottom: 3px solid #fff;
  }
`;

export default AppHeader;
