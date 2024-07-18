import classNames from 'classnames/bind';
import styles from './Register.module.sass';
import { Link } from 'react-router-dom';
import config from '../../../config';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Register() {
    
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
                <div className="text-6xl">Sign up</div>
                <div>Sign up and start managing your candidates!</div>
                <form action="" className="flex flex-col w-1/4 gap-10">
                    <input className={cx('input')} type="text" placeholder="Name" />
                    <input className={cx('input')} type="text" placeholder="Email" />
                    <input className={cx('input')} type="password" placeholder="Password" />
                    <button className={cx('button')}>Sign up</button>
                </form>
                <div className="flex flex-row gap-5">
                    <Link to={config.routes.login}><span style={{textDecoration: "underline"}}>Đăng nhập với tài khoản đã có</span></Link>
                </div>
            </div>
        </div>
    );
}

export default Register;