import styles from './AddListButton.module.scss';
import PlusSVG from '../../assets/svgs/add-circle.svg'
import { Link } from "react-router";

export default function AddListButton() {
  return (
    <button className={styles.addListButton}>
      <img src={PlusSVG} />
      <span>
        <Link to='/create-list'>Add List</Link>
      </span>
    </button>
  )
}