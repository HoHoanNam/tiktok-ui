import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header';
import styles from './DefaultLayout.module.scss';
import Sidebar from './Sidebar';
import Video from '~/assets/videos';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>
          {/* Truyền từ ngoài vào */}
          {children}
          <Video />
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
