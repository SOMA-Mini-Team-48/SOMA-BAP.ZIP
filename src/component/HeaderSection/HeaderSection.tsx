import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import HeaderMobileSection from '../HeaderMobileSection';
import { Link, useNavigate } from 'react-router-dom';

const HeaderSection = () => {
	const navigate = useNavigate();
	const pages = ['맛집 등록', '버그 제보'];
	const pagesHandlers = [
		() => {
			navigate('/add-store');
		},
		() => {
			window.open('https://open.kakao.com/o/sNT8Sq0e', '_blank');
		},
	];
	return (
		<AppBar position="static" color="inherit">
			<Container maxWidth="xl" sx={{ zIndex: 99 }}>
				<Toolbar disableGutters>
					<Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 6 }}>
						<Link to="/">
							<img src="/logo240.webp" alt="logo" height={50} />
						</Link>
					</Box>
					<HeaderMobileSection pages={pages} pagesHandlers={pagesHandlers} />
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page, index) => (
							<Button
								key={page}
								onClick={pagesHandlers[index]}
								sx={{ my: 2, display: 'block', mx: 1 }}
							>
								<Typography
									textAlign="center"
									fontSize={18}
									color={'black'}
									fontWeight={600}
								>
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
