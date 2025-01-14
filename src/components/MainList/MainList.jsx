import styles from './MainList.module.scss';
import { useContext, useEffect } from 'react';
import OneList from '../OneList/OneList';
import AddListButton from '../AddListButton/AddListButton';
import ListContext from '../../context/ListContext';

export default function MainList() {
  const { lists, addList } = useContext(ListContext);

  useEffect(() => { console.log(lists) }, [lists])

  return (
    <div className={styles.mainList}>
      {lists
      .filter(list => list.importance)
      .map((list) => (
        <OneList key={list.id} list={list}/>
      ))}
      {lists
      .filter(list => !list.importance || list.importance === undefined)
      .map((list) => (
        <OneList key={list.id} list={list}/>
      ))}
      <AddListButton addList={addList}/>
    </div>
  )
}
