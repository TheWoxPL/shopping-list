import PropTypes from 'prop-types';
import { useState, useContext } from 'react';
import styles from './AddItemForm.module.scss';
import ChooseCategoryIcon from '../ChooseCategoryIcon/ChooseCategoryIcon';
import ListContext from '../../context/ListContext';
import { v4 as uuidv4 } from 'uuid';

export default function AddItemForm
({ closeForm, listId }) {
  const { lists, setLists } = useContext(ListContext);
  const [itemName, setItemName] = useState('');
  
  function handleSubmit(event) {
    event.preventDefault();
    const updatedLists = lists.map(list => {
      if (list.id === listId) {
        const updatedItems = [...(list.items || []), { id: uuidv4(), name: itemName, category: 'category1', complete: false }];
        return { ...list, items: updatedItems };
      }
      return list;
    }); 
    setLists(updatedLists);
    setItemName('');
  }

  return (
    <div className={styles.addItemForm}>
      <div className={styles.title}>New Item</div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Enter item name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
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
        <ChooseCategoryIcon />
      </div>
      <div className={styles.buttonsArea}>
        <button className={styles.cancelButton} onClick={closeForm}>
          Cancel
        </button>
        <button className={styles.createButton} type='submit'>Create</button>
      </div>
      </form>
    </div>
  )
}

AddItemForm.propTypes = {
  listId: PropTypes.string.isRequired,
  closeForm: PropTypes.func.isRequired,
};  