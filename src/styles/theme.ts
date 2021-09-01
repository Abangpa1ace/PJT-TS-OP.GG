import { css } from 'styled-components';

type defaultTheme = {
  width: Object;
  gray: String[];   // gray[0 ~ 3] 과 같이 응용
  blue: Object;
  green: Object;
  win: Object;    // win-blue color
  lose: Object;   // lose-red color
  transition: String;
}

const theme: defaultTheme = {
  width: {
    'nav': '1300px',
    'main': '1080px',
  },
  gray: [
    '#F9F9F9',
    '#C4C4C4',
    '#9B9B9B',
    '#757575',
  ],
  blue: {
    light: '#ECF2FF',
    theme: '#5383E8',
    dark: '#232F46',
  },
  green: {
    beach: '#2DAF7F',
  },
  win: {
    light: '#A3CFEC',
    normal: '#64B1E4',
    dim: '#3D95E5',
    font: '#1F8ECD',
  },
  lose: {
    light: '#E2B6B3',
    normal: '#E89D98',
    dim: '#EE5A52',
    font: '#C6443E',
  },
  transition: 'all .3s ease',
}

export default theme;

export const webCenter = css`
  width: ${({ theme }) => theme.width.main};
  margin: 0 auto;
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const flexAlign = css`
  display: flex;
  align-items: center;
`;