import { Link } from 'react-router-dom';
import styles from './AddItemForm.module.scss';
import ChooseCategoryIcon from '../ChooseCategoryIcon/ChooseCategoryIcon';

export default function AddItemForm
() {
  return (
    <div className={styles.addItemForm}>
      <div className={styles.title}>New Item</div>
      <form>
        <input type="text" placeholder='enter item name'/>
      </form>
      <span className={styles.categoryTitle}>Choose category:</span>
      <div className={styles.categoryIcons}>
        <ChooseCategoryIcon />
        <ChooseCategoryIcon />
        <ChooseCategoryIcon />
        <ChooseCategoryIcon />
        <ChooseCategoryIcon />
        <ChooseCategoryIcon />
        <ChooseCategoryIcon />
        <ChooseCategoryIcon />
        <ChooseCategoryIcon />
        <ChooseCategoryIcon />
        <ChooseCategoryIcon />
        <ChooseCategoryIcon />
        <ChooseCategoryIcon />

      </div>
      <div className={styles.buttonsArea}>
        <button className={styles.cancelButton} >
          <Link to='/'>Cancel</Link>
        </button>
        <button className={styles.createButton} type='submit'>Create</button>
      </div>
    </div>
  )
}    