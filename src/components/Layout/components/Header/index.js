import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles); // styles cx la 1 doi tuong

function Header() {
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}></div>
      </header>
   );
}

export default Header;
