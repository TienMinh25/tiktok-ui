import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fcefe8d678a42366c170508cdf404aac~c5_300x300.webp?x-expires=1681034400&x-signature=pBLjMez1TLLBLOrfXC69jdW6Pq0%3D"
                alt="Anh test"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    quynhhuong2524
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('username')}>Quỳnh Hương</span>
            </div>
        </div>
    );
}

export default AccountItem;
