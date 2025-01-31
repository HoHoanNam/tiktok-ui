import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
function Header() {
  // Làm thẻ cha trong 1 component thì đặt là wrapper
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>{/* Logo, Search,... */}</div>
    </header>
  );
}

export default Header;
