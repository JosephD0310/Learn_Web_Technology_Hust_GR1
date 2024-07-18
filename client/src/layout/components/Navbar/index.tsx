import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Navbar.module.css';
import config from '../../../config';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <div className="container mx-auto h-20 flex items-center justify-between">
            <div className="font-black text-4xl text-blue-600">EBAI</div>
            <div>
                <ul className="flex flex-row gap-10 font-bold">
                    <li>
                        <NavLink to={config.routes.home} className={(nav) => cx('nav-item', { active: nav.isActive })}>
                            Trang chủ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={config.routes.page1} className={(nav) => cx('nav-item', { active: nav.isActive })}>
                            Navbar 1
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={config.routes.page2} className={(nav) => cx('nav-item', { active: nav.isActive })}>
                            Navbar 2
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={config.routes.page3} className={(nav) => cx('nav-item', { active: nav.isActive })}>
                            Navbar 3
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
