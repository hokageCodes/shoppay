import styles from './styles.module.scss';
import Ad from './Ad';
import MainComp from './MainComp';
import Top from './Top';

export default function Header({ country }) {
    console.log(country)
    return (
        <header className={styles.header}>
            <Ad />
            <Top country={country} />
            <MainComp />
        </header>
    )
}
