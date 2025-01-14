import styles from './MainList.module.scss';
import { useContext } from 'react';
import OneList from '../OneList/OneList';
import AddListButton from '../AddListButton/AddListButton';
import ListContext from '../../context/ListContext';

export default function MainList() {
  const { lists, addList } = useContext(ListContext);

  return (
    <div className={styles.mainList}>
      {lists.map((list) => (
        <OneList key={list.id} id={list.id} title={list.title} abstract={list.abstract} complete={list.complete} />
      ))}
      <AddListButton addList={addList}/>
    </div>
  )
}
