import styles from './AddListButton.module.scss';
import PlusSVG from '../../assets/svgs/add-circle.svg'

export default function AddListButton() {
  return (
    <button className={styles.addListButton}>
      <img src={PlusSVG} />
      <span>Add List</span>
    </button>
  )
}