import React from 'react';
import ReactDOM from 'react-dom/client';
import { NavermapsProvider } from 'react-naver-maps';
import App from './App';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './styles/global.css';
import { theme } from './styles/MuiStyle';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<CssBaseline />
		<ThemeProvider theme={theme}>
			<NavermapsProvider
				ncpClientId={`${process.env.REACT_APP_NAVER_MAP_CLIENT_ID}`}
			>
				<App />
			</NavermapsProvider>
		</ThemeProvider>
	</React.StrictMode>
);
