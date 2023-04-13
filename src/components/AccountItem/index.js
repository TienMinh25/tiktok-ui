import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fcefe8d678a42366c170508cdf404aac~c5_100x100.jpeg?biz_tag=tiktok_user.user_cover&x-expires=1681441200&x-signature=%2Fe7heDQCX9iPIqH7oU888weLcb0%3D"
                className={cx('search-avatar')}
                alt="Nguyen Van A"
                fallback="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-1/335285037_2381428085350476_1092623240281100112_n.jpg?stp=c0.85.480.480a_dst-jpg_p480x480&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=JAmfCBZMzZ8AX_wPWB9&_nc_ht=scontent.fhan14-4.fna&oh=00_AfCn0lYzSU77U7fjOfc472FvM3OSx8MqgTjVniA1D5ytcw&oe=643C1141"
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
