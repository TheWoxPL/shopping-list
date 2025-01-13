import styles from './Navbar.module.scss';
import MenuSVG from '../../assets/svgs/menu.svg'
import DotsVerticalSVG from '../../assets/svgs/dots-vertical.svg'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <img src={MenuSVG} className={styles.menuSVG} />
      <div className={styles.title}>Lists</div>
      <img src={DotsVerticalSVG} className={styles.options} />
    </div>
  )
}