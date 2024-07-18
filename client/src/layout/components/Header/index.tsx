import classNames from "classnames/bind";
import styles from './Header.module.css'
import { Link } from "react-router-dom";
import config from "../../../config";

const cx = classNames.bind(styles)

function Header() {
    return ( 
        <div className={cx('wrapper', 'bg-gradient-to-r from-blue-600 to-blue-400')}>
            <div className="container mx-auto flex h-full items-center justify-between text-white font-bold">
                <div>Hotline :</div>
                <div className="flex flex-row gap-5">
                    <Link to={config.routes.register}>Đăng ký</Link>
                    /
                    <Link to={config.routes.login}>Đăng nhập</Link>
                </div>
            </div>
        </div>
     );
}

export default Header;