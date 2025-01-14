import styles from './CreateListForm.module.scss';
import { Link, useNavigate } from "react-router";
import { useContext, useState } from 'react';
import ListContext from '../../context/ListContext';

export default function CreateListForm() {
  const { addList } = useContext(ListContext);
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [importance, setImportance] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const id = addList({ title, details, importance });
    navigate('/edit-list/'+id);
  }

  return (
    <div className={styles.createListForm}>
      <span className={styles.title}>Create New List</span>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.listName}
          type='text'
          placeholder='Enter list name'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className={styles.details}
          name='details'
          placeholder='Write some details if you need'
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <div className={styles.importance}>
          <input
            type='checkbox'
            name='importance'
            checked={importance}
            onChange={(e) => setImportance(e.target.checked)}
          />
          <span>Important</span>
        </div>
        <div className={styles.buttonsArea}>
          <button className={styles.cancelButton}>
            <Link to='/'>Cancel</Link>
          </button>
          <button className={styles.createButton} type='submit'>Create</button>
        </div>
      </form>
    </div>
  )
}