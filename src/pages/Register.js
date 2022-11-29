import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Wrapper from '../assets/wrapper/RegisterPage';
import { Logo } from '../component';
import { loginUser, registerUser } from '../features/user/UserSlice';

const initialstate = {
	name: '',
	email: '',
	password: '',
	isMember: true,
};

function Register() {
	const [values, setValues] = useState(initialstate);
	const { user, isLoading } = useSelector((store) => store.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleChange = (e) => {
		const name = e.target.name;
		console.log(name);
		const value = e.target.value;
		console.log(value);
		setValues({ ...values, [name]: value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const { name, email, password, isMember } = values;
		if (!email || !password || (!isMember && !name)) {
			toast.error('please fill out all fields');
		}

		if (isMember) {
			dispatch(loginUser({ email: email, password: password }));
			return;
		}
		dispatch(registerUser({ name, email, password }));
	};

	const toggleMember = () => {
		setValues({ ...values, isMember: !values.isMember });
	};

	useEffect(() => {
		if (user) {
			setTimeout(() => {
				navigate('/');
			}, 3000);
		}
	}, [user, navigate]);

	return (
		<Wrapper className='full-page'>
			<form className='form' onSubmit={onSubmit}>
				<Logo />
				<h3>{values.isMember ? 'login' : 'register'}</h3>
				{!values.isMember && (
					// <FormRow
					// 	type='text'
					// 	name='name'
					// 	value={values.name}
					// 	onChange={handleChange}
					// />
					<div className='form-row'>
						<label htmlFor='name' className='form-label'>
							name
						</label>
						<input
							type='text'
							name='name'
							value={values.name}
							onChange={handleChange}
							className='form-input'
						/>
					</div>
				)}

				{/* <FormRow
					type='text'
					name='email'
					value={values.email}
					onChange={handleChange}
				/>

				<FormRow
					type='password'
					name='password'
					value={values.password}
					onChange={handleChange}
				/> */}
				<div className='form-row'>
					<label htmlFor='email' className='form-label'>
						Email
					</label>
					<input
						type='text'
						name='email'
						value={values.email}
						onChange={handleChange}
						className='form-input'
					/>
				</div>
				<div className='form-row'>
					<label htmlFor='password' className='form-label'>
						Bassword
					</label>
					<input
						type='text'
						name='password'
						value={values.password}
						onChange={handleChange}
						className='form-input'
					/>
				</div>
				<button className='btn btn-block' disabled={isLoading}>
					{isLoading ? 'loading...' : 'submit'}
				</button>


				
				<p>
					{!values.isMember ? 'already member?' : 'Not a member yet?'}
					<button type='button' onClick={toggleMember} className='member-btn'>
						{!values.isMember ? 'login' : 'register'}
					</button>
				</p>
			</form>
		</Wrapper>
	);
}

export default Register;
