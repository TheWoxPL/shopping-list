import styles from './OneList.module.scss';
import DotsVerticalSVG from '../../assets/svgs/dots-vertical.svg'
import PropTypes from 'prop-types'; 
import { useNavigate } from 'react-router-dom';

export default function OneList({list}) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/edit-list/${list.id}`);
  }

  const totalItems = list.items.length;
  const completedItems = list.items.filter(item => item.complete).length;
  const listClass = list.importance ? `${styles.oneList} ${styles.oneListImportant}` : styles.oneList;


  return (
    <div className={listClass} onClick={handleClick}>
      <div className={styles.left}>
        <span className={styles.title}>{list.title}</span>
        <span className={styles.abstract}>{list.abstract}</span>
      </div>
      <div className={styles.right}>
        <img src={DotsVerticalSVG}/>
        <div className={styles.complete}>{completedItems}/{totalItems}</div>
      </div>
    </div>
  )
}    

OneList.propTypes = {
  list: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    abstract: PropTypes.string,
    importance: PropTypes.bool,
    important: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      complete: PropTypes.bool,
    })).isRequired,
  }).isRequired,
};