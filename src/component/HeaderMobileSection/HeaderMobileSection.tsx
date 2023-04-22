import React from 'react';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { Fragment, MouseEvent, useState } from 'react';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

type Props = {
	pages: string[];
	pagesHandlers: (() => void)[];
};

const HeaderMobileSection = ({ pages, pagesHandlers }: Props) => {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<Fragment>
			<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
				<IconButton
					size="large"
					aria-label="메뉴 버튼"
					aria-controls="menu-appbar"
					aria-haspopup="true"
					onClick={handleOpenNavMenu}
					color="inherit"
				>
					<MenuIcon />
				</IconButton>
				<Menu
					id="menu-appbar"
					anchorEl={anchorElNav}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					keepMounted
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
					open={Boolean(anchorElNav)}
					onClose={handleCloseNavMenu}
					sx={{
						display: { xs: 'block', md: 'none' },
					}}
				>
					{pages.map((page, index) => (
						<MenuItem
							key={page}
							onClick={() => {
								handleCloseNavMenu();
								pagesHandlers[index]();
							}}
						>
							<Typography textAlign="center">{page}</Typography>
						</MenuItem>
					))}
				</Menu>
			</Box>
			<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
				<Link to="/">
					<img src="/logo240.webp" alt="logo" height={50} />
				</Link>
			</Box>
			<Box sx={{ flexGrow: 1 }}></Box>
		</Fragment>
	);
};

export default HeaderMobileSection;
