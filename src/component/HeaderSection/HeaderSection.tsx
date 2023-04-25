import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import HeaderMobileSection from '../HeaderMobileSection';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import { searchModalState } from '../../store/store';
import { useRecoilState } from 'recoil';

const HeaderSection = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const pages = ['맛집 등록', '버그 제보'];
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [searchModalOpen, setSearchModalOpen] =
		useRecoilState(searchModalState);
	const pagesHandlers = [
		() => {
			navigate('/add-store');
		},
		() => {
			window.open('https://open.kakao.com/o/sNT8Sq0e', '_blank');
		},
	];
	const handleSearchModalOpen = () => {
		setSearchModalOpen(true);
	};

	return (
		<AppBar position="static" color="inherit">
			<Container maxWidth="xl" sx={{ zIndex: 99 }}>
				<Toolbar disableGutters>
					<Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 6 }}>
						<Link to="/">
							<img src="/logo240.webp" alt="logo" height={50} />
						</Link>
					</Box>
					<HeaderMobileSection
						pages={pages}
						pagesHandlers={pagesHandlers}
						handleSearchModal={handleSearchModalOpen}
					/>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />
					<Box
						sx={{
							display: { xs: 'none', md: 'flex' },
						}}
					>
						{pages.map((page, index) => (
							<Button
								key={page}
								onClick={pagesHandlers[index]}
								sx={{ display: 'block', mx: 1 }}
							>
								<Typography fontSize={18} color={'black'} fontWeight={600}>
									{page}
								</Typography>
							</Button>
						))}
						{location.pathname == '/' && (
							<IconButton
								sx={{ display: 'flex', mx: 1 }}
								size="small"
								onClick={handleSearchModalOpen}
							>
								<Search />
							</IconButton>
						)}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default HeaderSection;
