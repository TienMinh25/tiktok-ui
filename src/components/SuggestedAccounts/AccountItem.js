import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './SuggestAccounts.module.scss';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fcefe8d678a42366c170508cdf404aac~c5_100x100.jpeg?biz_tag=tiktok_user.user_cover&x-expires=1681441200&x-signature=%2Fe7heDQCX9iPIqH7oU888weLcb0%3D"
                alt="Anh"
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>quốc phú</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </p>
                <p className={cx('name')}>quốc phú nguyễn</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
