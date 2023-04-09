import styles from './Menu.module.scss';

function MenuItem({ data }) {
    return <button>{JSON.stringify(data)}</button>;
}

export default MenuItem;
