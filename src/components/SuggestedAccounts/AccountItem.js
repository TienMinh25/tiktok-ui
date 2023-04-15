import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestAccounts.module.scss';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '../Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} render={renderPreview} placement="bottom">
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
            </Tippy>
        </div>
    );
}

export default AccountItem;
