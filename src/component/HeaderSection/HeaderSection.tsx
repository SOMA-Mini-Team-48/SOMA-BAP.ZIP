import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import HeaderMobileSection from '../HeaderMobileSection';

const pages = ['맛집 등록', '버그 제보'];

const HeaderSection = () => {
	return (
		<AppBar position="static" color="primary">
			<Container maxWidth="xl" sx={{ zIndex: 99 }}>
				<Toolbar disableGutters>
					<Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 6 }}>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							title
						</Typography>
					</Box>
					<HeaderMobileSection pages={pages} />
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={() => {
									return;
								}}
								sx={{ my: 2, color: 'white', display: 'block', mx: 1 }}
							>
								<Typography textAlign="center" fontSize={18}>
									{page}
								</Typography>
							</Button>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default HeaderSection;
