import classNames from 'classnames/bind';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import config from '../../../config';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className="container mx-auto flex h-full items-center justify-between text-white font-bold">
                <div className="text-white text-5xl font-bold">
                    <span className="text-green-400">E</span>BAI
                </div>
                
            </div>
        </div>
    );
}

export default Header;
