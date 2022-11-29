import React from 'react'
import Wrapper from '../assets/wrapper/BigSidebar'
import NavLinks from './NavLinks';
import Logo from '../component/Logo';
import { useSelector } from 'react-redux';

const BigSidebar = () => {
	const { isSidebarOpen } = useSelector((store) => store.user);

	return (
		<Wrapper>
			<div
				className={
					isSidebarOpen
						? 'sidebar-container '
						: 'sidebar-container show-sidebar'
				}>
				<div className='content'>
					<header>
						<Logo />
					</header>
					<NavLinks />
				</div>
			</div>
		</Wrapper>
	);
};
export default BigSidebar;