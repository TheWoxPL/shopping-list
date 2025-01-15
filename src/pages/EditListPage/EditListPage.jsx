import styles from './EditListPage.module.scss'
import { useState, useContext } from 'react';
import ListContext from '../../context/ListContext';
import { useParams } from 'react-router-dom';
import BackSVG from '../../assets/svgs/back.svg'
import DotsVerticalSVG from '../../assets/svgs/dots-vertical.svg'
import ListItem from '../../components/ListItem/ListItem';
import AddItemButton from '../../components/AddItemButton/AddItemButton';
import AddItemForm from '../../components/AddItemForm/AddItemForm';
import { Link } from 'react-router-dom';
import Shortcuts from '../../components/Shortcuts/Shortcuts';

export default function EditListPage() {
  const [isAddingItem, setIsAddingItem] = useState(false);
  const { id } = useParams();
  const { lists, setLists } = useContext(ListContext);

  const list = lists.find((list) => list.id === id);
  
  const handleAddItemClick = () => {
    setIsAddingItem(!isAddingItem);
  };

  const handleRemoveItem = (itemId) => {
    const updatedLists = lists.map(list => {
      if (list.id === id) {
        const updatedItems = list.items.filter(item => item.id !== itemId);
        return { ...list, items: updatedItems };
      }
      return list;
    });
    setLists(updatedLists);
  };

  const handleToggleComplete = (itemId) => {
    const updatedLists = lists.map(list => {
      if (list.id === id) {
        const updatedItems = list.items.map(item => {
          if (item.id === itemId) {
            return { ...item, complete: !item.complete };
          }
          return item;
        });
        return { ...list, items: updatedItems };
      }
      return list;
    });
    setLists(updatedLists);
  };

  return (
    <div className={styles.editListPage}>
      <div className={styles.navigator}>
        <Link to='/'>
          <img className={styles.back} src={BackSVG}/>
        </Link>
        <span className={styles.title} >{list.title}</span>
        <img src={DotsVerticalSVG} className={styles.options} />
      </div>
      <div className={styles.abstract} hidden={list.abstract ? list.abstract.length === 0 : true}>{list.abstract ? list.abstract : ''}</div>
      {list.items && list.items
        .filter(item => !item.complete)
        .map((item) => (
          <ListItem key={item.id} item={item} onRemove={handleRemoveItem} onToggleComplete={handleToggleComplete} />
      ))}
      {list.items && list.items
        .filter(item => item.complete)
        .map((item) => (
          <ListItem key={item.id} item={item} onRemove={handleRemoveItem} onToggleComplete={handleToggleComplete} />
      ))}
      {isAddingItem && <AddItemForm closeForm={handleAddItemClick} listId={id} />}
      <AddItemButton onClick={handleAddItemClick}/>
      <Shortcuts />
    </div>
  )
}