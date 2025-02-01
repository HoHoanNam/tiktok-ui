import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/63de0a0a40f5ff17c23d861bbcd8c157.jpeg?lk3s=a5d48078&nonce=97392&refresh_token=6aaa9b9d182d60342089e8fb0f2443b3&x-expires=1738566000&x-signature=tH8Rqs%2FNzbRGV3y4VzlVkRc6SkE%3D&shp=a5d48078&shcp=81f88b70"
        alt="Hoaa"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>ive.official</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>IVE.official</span>
      </div>
    </div>
  );
}

export default AccountItem;
