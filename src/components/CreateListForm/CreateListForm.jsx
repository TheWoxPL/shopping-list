import styles from './CreateListForm.module.scss';

export default function CreateListForm() {
  return (
    <div className={styles.createListForm}>
        <span className={styles.title} >Create New List</span>
        <form className={styles.form}>
          <input className={styles.listName} type='text' placeholder='Enter list name' name='title' />
          <textarea className={styles.details} name='details' placeholder='Write some details if you need'></textarea>
          <div className={styles.importance}>
            <input type='checkbox' name='immportance' />
            <span>Imporant</span>
          </div>
          <div className={styles.buttonsArea}>
            <button className={styles.cancelButton}>Cancel</button>
            <button className={styles.createButton} type='submit'>Create</button>
          </div>
        </form>
    </div>
  )
}