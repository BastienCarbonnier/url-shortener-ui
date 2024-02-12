import './App.css'
import router from '@/router'
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import Header from './core/components/Header';
import { css } from '@linaria/core';
import { HEADER_HEIGHT } from './core/constants/style.constant';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const mainStyle = css`
  margin-top: ${String(HEADER_HEIGHT)};
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header></Header>
      <main className={mainStyle}>
        <RouterProvider router={router}></RouterProvider>
      </main>
    </ThemeProvider>
  )
}

export default App
