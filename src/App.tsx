import './App.css'
import router from '@/router'
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import { RouterProvider } from 'react-router-dom'
import LanguageToggle from './core/components/LanguageToggle';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <LanguageToggle></LanguageToggle>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  )
}

export default App
