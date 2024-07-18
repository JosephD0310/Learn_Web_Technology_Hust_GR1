import classNames from 'classnames/bind';
import styles from './Login.module.sass';
import { Link, useNavigate } from 'react-router-dom';
import config from '../../../config';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../services/context/AuthContext';
import axios from 'axios';

const cx = classNames.bind(styles);

function Login() {

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined,
    });

    const { error, dispatch } = useContext(AuthContext);

    const handleChange = (e:any) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }

    const handleClick = async (e: any) => {
        e.preventDefault();
        dispatch({ type: 'LOGIN_START' });
        try {
            const res = await axios.post('http://localhost:3000/auth/login', credentials);
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
            navigate('/');
        } catch (err: any) {
            dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
            console.log(err.response.data)
        }

        console.log(error?.msg)
    };

    return (
        <div className="bg-cover bg-center h-screen w-full" style={{ backgroundImage: 'url(/bg.png)' }}>
            <div className="container mx-auto flex flex-row items-center justify-between py-10">
                <div className="text-white text-5xl font-bold">
                    <span className="text-green-400">E</span>BAI
                </div>
                <div className="flex flex-row gap-2 text-white">
                    <img
                        className="h-8 rounded-md"
                        src="https://i.pinimg.com/564x/26/79/04/2679047a33c2f3d3a3ed6e676c65450d.jpg"
                        alt=""
                    />{' '}
                    EN
                </div>
            </div>
            <div className="flex flex-col items-center gap-12 text-white">
                <div className="text-8xl font-extrabold">
                    <span className="text-green-400">E</span>BAI
                </div>
                <div className="text-6xl">Sign in</div>
                <div>Sign in and start managing your candidates!</div>
                <form action="" className="flex flex-col w-1/4 gap-10">
                    <input className={cx('input')} type="text" placeholder="Email" id='email' onChange={handleChange} />
                    <input className={cx('input')} type="password" placeholder="Password" id='password' onChange={handleChange}/>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center gap-2">
                            <input className="p-5" type="checkbox" id="rememberMe" />
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>
                        <div className="text-green-500">Forgot password?</div>
                    </div>
                    <button className={cx('button')} onClick={handleClick}>Login</button>
                    {error && <span>{error.msg}</span>}
                </form>
                <div className="flex flex-row gap-5">
                    <Link to={config.routes.register}><span style={{textDecoration: "underline"}}>Đăng ký tài khoản mới</span></Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
