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

export default function EditListPage() {
  const [isAddingItem, setIsAddingItem] = useState(false);
  const { id } = useParams();
  const { lists } = useContext(ListContext);

  const list = lists.find((list) => list.id === id);

  const handleAddItemClick = () => {
    console.log(list)
    console.log(list)
    setIsAddingItem(!isAddingItem);
  };

  return (
    <div className={styles.editListPage}>
      <div className={styles.navigator}>
        <Link to='/'>
          <img className={styles.back} src={BackSVG}/>
        </Link>
        <span className={styles.title} >Title</span>
        <img src={DotsVerticalSVG} className={styles.options} />
      </div>
      {/* <div className={styles.groups}>
        <div className={styles.groupsCategory}>Suggested</div>
        <div className={styles.groupsCategory}>Added</div>
        <div className={styles.groupsCategory}>Done</div>
      </div> */}
      {list.items && list.items.map((item) => (
          <ListItem key={item.id} />
        ))}
      {isAddingItem && <AddItemForm closeForm={handleAddItemClick} listId={id}/>}
      <AddItemButton onClick={handleAddItemClick}/>
    </div>
  )
}