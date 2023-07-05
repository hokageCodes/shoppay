import Menu from './Menu';
import Offers from './Offers';
import styles from './styles.module.scss';
import MainSwiper from './Swiper';

export default function Main() {
  return (
    <div className={styles.main}>
        <div className={styles.header}>Header</div>
        <Menu />
        <MainSwiper />
        <Offers />
        <div className={styles.user}>User</div>
    </div>
  )
}
