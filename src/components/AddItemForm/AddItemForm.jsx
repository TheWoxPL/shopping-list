import PropTypes from 'prop-types';
import { useState, useContext } from 'react';
import styles from './AddItemForm.module.scss';
import ChooseCategoryIcon from '../ChooseCategoryIcon/ChooseCategoryIcon';
import ListContext from '../../context/ListContext';
import { v4 as uuidv4 } from 'uuid';
import getAllCategories from '../../utils/functions/categoriesManage';

export default function AddItemForm
({ closeForm, listId }) {
  const { lists, setLists } = useContext(ListContext);
  const [itemName, setItemName] = useState('');
  const allCategories = getAllCategories();
  const [choosenCategory, setChoosenCategory] = useState('Any');

  function handleCategoryClick(category) {
    setChoosenCategory(category);
    console.log(category);
  }

  
  function handleSubmit(event) {
    event.preventDefault();
    const updatedLists = lists.map(list => {
      if (list.id === listId) {
        const updatedItems = [...(list.items || []), { id: uuidv4(), name: itemName, category: choosenCategory, complete: false }];
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
        {allCategories.map((category) => {
          return (
            <ChooseCategoryIcon key={category.name} name={category.name} icon={category.icon} handleCategoryClick={handleCategoryClick} choosenCategory={choosenCategory}/>
          )
        })}
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