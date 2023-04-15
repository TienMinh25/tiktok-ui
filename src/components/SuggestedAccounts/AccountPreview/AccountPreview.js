import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fcefe8d678a42366c170508cdf404aac~c5_100x100.jpeg?biz_tag=tiktok_user.user_cover&x-expires=1681441200&x-signature=%2Fe7heDQCX9iPIqH7oU888weLcb0%3D"
                    alt="Anh "
                />
                <div>
                    <Button className={cx('follow-btn')} primary small>
                        Follow
                    </Button>
                </div>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>quốc phú</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </p>
                <p className={cx('name')}>quốc phú nguyễn</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers </span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
