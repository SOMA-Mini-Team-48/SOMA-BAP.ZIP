import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { NavermapsProvider } from 'react-naver-maps';
import App from './App';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './styles/global.css';
import { theme } from './styles/MuiStyle';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<Fragment>
		<CssBaseline />
		<ThemeProvider theme={theme}>
			<RecoilRoot>
				<NavermapsProvider
					ncpClientId={`${process.env.REACT_APP_NAVER_MAP_CLIENT_ID}`}
				>
					<App />
				</NavermapsProvider>
			</RecoilRoot>
		</ThemeProvider>
	</Fragment>
);
