import styles from './AddItemButton.module.scss';
import PlusSVG from '../../assets/svgs/add-circle.svg'

export default function AddItemButton() {
  return (
    <button className={styles.addItemButton}>
      <img src={PlusSVG} />
      <span>
        Add item
      </span>
    </button>
  )
}