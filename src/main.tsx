import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider } from 'react-router'
import Router from "./router/router";
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'


const theme = createTheme({
  palette: {
    primary: {
      main: "#535BF2", // Set your desired primary color
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FFF", // Set text color to white
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          color: "#FFF", // Set text color to white
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <RouterProvider router={Router} />
      </ThemeProvider>
    </React.StrictMode>,
)
