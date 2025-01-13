import styles from './MainList.module.scss';
import OneList from '../OneList/OneList';

export default function MainList() {
  return (
    <>
      <div className={styles.mainList}>
        <OneList title='title1' abstract='abstract' complete={[1,2]}/>
        <OneList title='title2'/>
      </div>
    </>
  )
}