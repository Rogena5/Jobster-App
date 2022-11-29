import main from '../assets/images/main.svg';
import {Logo} from '../component';
import Wrapper from '../assets/wrapper/LandingPage'
import { Link } from 'react-router-dom';

const Landing = () => {
	return (
		<>
			<Wrapper>
				<nav>
					<Logo />
				</nav>
				<section className='container page'>
					<div className='info'>
						<h1>
							job <span>tracking</span>app
						</h1>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Consequuntur, voluptatem voluptas? Ipsam laborum quam ducimus
							voluptatibus pariatur deserunt minima harum.
						</p>
						<Link to="/register" className='btn btn-hero'>Login/ Register</Link>
					</div>
					<div>
						<img src={main} alt='job hunt' className='img main-img' />
					</div>
				</section>
			</Wrapper>
		</>
	);
};

export default Landing;
