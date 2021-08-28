import React from 'react'
import styled from 'styled-components';

const AppHeader: React.FC = () => {
  return (
    <Appfooter>
      <ul className="link-list">About OP.GG</ul>
      <p className="rights">© 2012-2021 OP.GG. OP.GG isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</p>
    </Appfooter>
  )
}

const Appfooter = styled.footer`
  width: ${({ theme }) => theme.width.main};
  margin: 0 auto;
  padding: 40px 0;

  .link-list {
    font-size: 12px;
    margin-bottom: 5px;
  }
  .rights {
    font-size: 11px;
  }
`;

export default AppHeader;
