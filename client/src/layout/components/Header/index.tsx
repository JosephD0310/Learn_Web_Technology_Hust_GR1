import classNames from 'classnames/bind';
import styles from './Header.module.css';
import { Link, useNavigate } from 'react-router-dom';
import config from '../../../config';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../services/context/AuthContext';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '../../../components/Popper';
import PopperItem from '../../../components/PopperItem';
import axios from 'axios';

const cx = classNames.bind(styles);

function Header() {
    const { user, dispatch } = useContext(AuthContext);
    const [profile, setProfile] = useState({
        name: null,
        email: null,
        create_at: null,
    });

    const [userMenu, setUserMenu] = useState(false);
    const showUser = () => setUserMenu(true);
    const hideUser = () => setUserMenu(false);

    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: 'LOGIN_SUCCESS' });
        navigate('/login');
    };

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = user?.accessToken;

                const res = await axios.get('https://learn-web-technology-hust-gr1.onrender.com/user/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setProfile(res.data);
            } catch (err: any) {
                console.log('Error');
            }
        };

        fetchProfile();
    }, [user]);

    return (
        <div className={cx('wrapper')}>
            <div className="container mx-auto flex h-full items-center justify-between text-white font-bold">
                <div className="text-white text-5xl font-bold">
                    <span className="text-green-400">E</span>BAI
                </div>
                <div className="flex items-center gap-4 ">
                    {user ? (
                        <>
                            <p>{profile.name}</p>
                            <Tippy
                                visible={userMenu}
                                onClickOutside={hideUser}
                                placement="bottom-end"
                                interactive
                                render={(attrs) => (
                                    <div className={cx('user-menu')} tabIndex={-1} {...attrs}>
                                        <PopperWrapper>
                                            <PopperItem icon={<FontAwesomeIcon icon={faUser} />}>Profile</PopperItem>
                                            <PopperItem
                                                onClick={handleLogout}
                                                icon={<FontAwesomeIcon icon={faRightFromBracket} />}
                                            >
                                                Log out
                                            </PopperItem>
                                        </PopperWrapper>
                                    </div>
                                )}
                            >
                                <div className={cx('username')} onClick={userMenu ? hideUser : showUser}>
                                    <img className="h-14" src="/ava.png" alt="avatar" style={{cursor: "pointer"}}/>
                                </div>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <div className="flex">
                                <Link to={config.routes.login} className="text-green-400">
                                    Login
                                </Link>
                                <span className="w-10"></span>
                                <Link to={config.routes.register}>Sign up</Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
