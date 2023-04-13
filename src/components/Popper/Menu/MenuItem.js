import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles1 from './Menu.module.scss';

const cx = classNames.bind(styles1);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
